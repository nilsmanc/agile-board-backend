import mongoose, { Document } from 'mongoose'

interface User extends Document {
  name: string
  avatar: string
}

const UserSchema = new mongoose.Schema<User>(
  {
    name: String,
    avatar: String,
  },
  { timestamps: true },
)

export default mongoose.model<User>('User', UserSchema)
