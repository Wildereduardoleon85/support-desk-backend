import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/UserModel'
import registerService from '../services/registerService'

/**
 * @desc Register a new user
 * @route /api/users
 * @acess public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, message } = await registerService(req.body)

    if (!data) {
      res.status(400)
      throw new Error(message)
    }

    const { _id, name, email } = data

    res.status(201).json({ _id, name, email })
  }
)

/**
 * @desc Login user
 * @route /api/users/login
 * @acess public
 */
export const loginUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { password, email } = req.body

    const user = await User.findOne({ email })

    res.send('Login route')
  }
)
