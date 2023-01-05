import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

/**
 * @desc Register a new user
 * @route /api/users
 * @acess public
 */
export const registerUser = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({ msg: 'ok' })
  }
)

/**
 * @desc Login user
 * @route /api/users/login
 * @acess public
 */
export const loginUser = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('Login route')
  }
)
