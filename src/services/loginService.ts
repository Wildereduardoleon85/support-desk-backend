import User from '../models/UserModel'
import { LoginSchema, ServiceResponse } from '../types'
import bcrypt from 'bcryptjs'

async function loginService(body: LoginSchema): Promise<ServiceResponse> {
  const { password, email } = body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    return {
      data: user,
      error: null,
    }
  }

  return {
    error: 'invalid credentials',
  }
}

export default loginService
