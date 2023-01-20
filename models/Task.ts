import mongoose, { Document } from 'mongoose'

interface Task extends Document {
  id: string
  tasks: []
  boardId: string
}

const TaskSchema = new mongoose.Schema<Task>({
  id: String,
  tasks: Array,
  boardId: String,
})

export default mongoose.model<Task>('Task', TaskSchema)
