import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { loginService, registerService } from '../services'
import { AuthRequest, ServiceResponse, UserResponse } from '../types'

/**
 * @desc  Register a new user
 * @route POST /api/users
 * @acess public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode }: ServiceResponse<UserResponse> =
      await registerService(req.body)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Login user
 * @route POST /api/users/login
 * @acess public
 */
export const loginUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode }: ServiceResponse<UserResponse> =
      await loginService(req.body)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Get current user
 * @route GET /api/users/me
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
