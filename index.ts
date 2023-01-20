import express, { Application } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { getAllUsers, getMe } from './controllers/UsersController'
import { getAllBoards } from './controllers/BoardController'
import { createTask, getAllTasks, getBoardTasks, updateTasks } from './controllers/TaskController'

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('Database OK'))
  .catch((err) => console.log('Database error', err))

const app: Application = express()

app.use(express.json())
app.use(cors())

app.get('/users', getAllUsers)
app.get('/me', getMe)

app.post('/tasks', createTask)
app.get('/tasks', getAllTasks)

app.get('/boards', getAllBoards)
app.get('/boards/:boardId/tasks/:id', getBoardTasks)
app.put('/boards/:boardId/tasks/:id', updateTasks)

app.listen(process.env.PORT || 4444, () => {
  console.log('Server OK')
})
