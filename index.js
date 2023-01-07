import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { MONGODB_URL } from './variables.js'

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server OK')
})
