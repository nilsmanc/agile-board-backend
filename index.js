import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { getAllUsers, getMe } from './controllers/UsersController.js'
import { getAllBoards } from './controllers/BoardController.js'
import {
  createTask,
  getAllTasks,
  getBoardTasks,
  updateTasks,
} from './controllers/TaskController.js'

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users', getAllUsers)
app.get('/me', getMe)

app.post('/tasks', createTask)
app.get('/tasks', getAllTasks)

app.get('/boards', getAllBoards)
app.get('/boards/:boardId/tasks/:id', getBoardTasks)
app.put('/boards/:boardId/tasks/:id', updateTasks)

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server OK')
})
