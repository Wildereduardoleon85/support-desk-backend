import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import loginService from '../services/loginService'
import registerService from '../services/registerService'

/**
 * @desc Register a new user
 * @route /api/users
 * @acess public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error } = await registerService(req.body)

    if (error) {
      res.status(400)
      throw new Error(error)
    }

    res.status(201).json({
      _id: data?._id,
      name: data?.name,
      email: data?.email,
    })
  }
)

/**
 * @desc Login user
 * @route /api/users/login
 * @acess public
 */
export const loginUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error } = await loginService(req.body)

    if (error) {
      res.status(401)
      throw new Error(error)
    }

    res.status(200).json({
      _id: data?._id,
      name: data?.name,
      email: data?.email,
    })
  }
)
