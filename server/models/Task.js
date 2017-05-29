const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
    default: +new Date(),
    required: true
  },
  modifiedAt: {
    type: Number
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  }
})

const Task = mongoose.model('Task', TaskSchema )

module.exports = Task