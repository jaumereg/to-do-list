const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

// const taskRoutes = require('./routes/task')
// const tasksRoutes = require('./routes/tasks')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(express.static( path.join(__dirname, '../client')  ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
	res.render('list')
})

app.listen(PORT, () => console.log(`Listening from PORT ${PORT}`))