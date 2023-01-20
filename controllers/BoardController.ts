import { Request, Response } from 'express'

import BoardModel from '../models/Board'

export const getAllBoards = async (req: Request, res: Response) => {
  try {
    const boards = await BoardModel.find().exec()

    res.json(boards)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get boards',
    })
  }
}
