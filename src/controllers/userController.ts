import { Request, Response } from 'express'

/**
 * @desc Register a new user
 * @route /api/users
 * @acess public
 */
export const registerUser = (req: Request, res: Response): void => {
  res.status(200).json({ msg: 'Ok' })
}

/**
 * @desc Login user
 * @route /api/users/login
 * @acess public
 */
export const loginUser = (_req: Request, res: Response): void => {
  res.send('Login route')
}
