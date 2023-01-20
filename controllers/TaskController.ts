import { Request, Response } from 'express'

import TaskModel from '../models/Task'

export const createTask = async (req: Request, res: Response) => {
  try {
    const doc = new TaskModel()

    const user = await doc.save()

    res.json(user)
  } catch (err) {
    console.log(err)
  }
}

export const getBoardTasks = async (req: Request, res: Response) => {
  const boardId = req.params.boardId
  const id = req.params.id

  try {
    const tasks = await TaskModel.find({ id, boardId }).exec()

    res.json({ tasks: tasks[0]?.tasks, id: tasks[0]?.id })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get tasks',
    })
  }
}

export const updateTasks = async (req: Request, res: Response) => {
  const boardId = req.params.boardId
  const id = req.params.id
  const tasks = req.body.tasks

  try {
    await TaskModel.updateMany({ id, boardId }, { tasks })

    res.json({
      success: true,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to update tasks',
    })
  }
}

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskModel.find().exec()

    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get tasks',
    })
  }
}
