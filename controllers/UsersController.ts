import { Request, Response } from 'express'

import UserModel from '../models/User'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find().exec()

    res.json(users)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get users',
    })
  }
}

export const getMe = async (req: Request, res: Response) => {
  try {
    const userId = '63b96ae825eec5201cebcdd9'

    const user = await UserModel.findById(userId).exec()

    res.json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get user',
    })
  }
}
