const Task = require('../../../models/Task')

function updateById(req, res) {
    const { id } = req.params
    const { title, completed, modifiedAt = +new Date() } = req.body

    const updateData = {}
    if (title) updateData.title = title
    if (completed) updateData.completed = completed
    updateData.modifiedAt = modifiedAt

    Task.findByIdAndUpdate(id, updateData)
        .then(msg => {
            res.json(msg)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = updateById