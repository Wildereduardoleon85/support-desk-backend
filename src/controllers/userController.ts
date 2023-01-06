import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import loginService from '../services/loginService'
import registerService from '../services/registerService'
import { AuthRequest, ServiceResponse } from '../types'

/**
 * @desc Register a new user
 * @route /api/users
 * @acess public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode }: ServiceResponse = await registerService(
      req.body
    )

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc Login user
 * @route /api/users/login
 * @acess public
 */
export const loginUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode }: ServiceResponse = await loginService(
      req.body
    )

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc Get current user
 * @route /api/users/me
 * @acess private
 */
export const getMe = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {
    if (!req.user) {
      res.status(500)
      throw new Error('server error')
    }

    const { _id, name, email } = req.user
    res.status(200).json({
      id: _id,
      name,
      email,
    })
  }
)
