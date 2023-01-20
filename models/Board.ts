import mongoose, { Document } from 'mongoose'

interface Board extends Document {
  id: string
  title: string
  sections: []
}

const BoardSchema = new mongoose.Schema<Board>({
  id: String,
  title: String,
  sections: Array,
})

export default mongoose.model<Board>('Board', BoardSchema)
