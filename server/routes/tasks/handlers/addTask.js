const Task = require('../../../models/Task')

function addTask(req,res) {
  const { title, createdAt, completed } = req.body

  const newTask = new Task({ title, createdAt })

  newTask
    .save()
    .then( msg => {
      res.redirect('/tasks')
      // res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })
}

module.exports = addTask 