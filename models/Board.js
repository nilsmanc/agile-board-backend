import mongoose from 'mongoose'

const BoardSchema = new mongoose.Schema({
  id: String,
  title: String,
  sections: Array,
})

export default mongoose.model('Board', BoardSchema)
