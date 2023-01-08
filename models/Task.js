import mongoose, { mongo } from 'mongoose'

const TaskSchema = new mongoose.Schema({
  id: String,
  tasks: Array,
  boardId: String,
})

export default mongoose.model('Task', TaskSchema)
