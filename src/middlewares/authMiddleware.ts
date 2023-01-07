import { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { UserModel } from '../models'
import { AuthRequest, User } from '../types'

export const protect = asyncHandler(
  async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    let token: string
    const jwtSecret: string = String(process.env.JWT_SECRET)

    const authHeader = req.headers.authorization
    const isAuthHeader = !!authHeader
    const isAuthBearerHeader = authHeader?.startsWith('Bearer')

    if (isAuthHeader && isAuthBearerHeader) {
      try {
        // Get token from header
        token = authHeader.split(' ')[1]
        // Verify token
        const { id } = jwt.verify(token, jwtSecret) as { id: string }
        req.user = (await UserModel.findById(id).select('-password')) as User
        next()
        return
      } catch (error) {
        console.log(error)
        res.status(401)
        throw new Error('Not authorized')
      }
    }

    res.status(401)
    throw new Error('Not authorized')
  }
)
