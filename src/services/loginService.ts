import User from '../models/UserModel'
import { LoginSchema, ServiceResponse } from '../types'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils'

async function loginService(body: LoginSchema): Promise<ServiceResponse> {
  const { password, email } = body

  const user = await User.findOne({ email })

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

export default loginService
