import BoardModel from '../models/Board.js'

export const getAllBoards = async (req, res) => {
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
