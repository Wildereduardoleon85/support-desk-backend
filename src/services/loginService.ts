import { UserModel } from '../models'
import { LoginSchema, ServiceResponse, UserResponse } from '../types'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils'

export const loginService = async (
  body: LoginSchema
): Promise<ServiceResponse<UserResponse>> => {
  const { password, email } = body

  const user = await UserModel.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    return {
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
      error: null,
      statusCode: 200,
    }
  }

  return {
    error: 'invalid credentials',
    statusCode: 401,
  }
}
