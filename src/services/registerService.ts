import User from '../models/UserModel'
import { RegisterSchema, ServiceResponse } from '../types'
import bcrypt from 'bcryptjs'

async function registerService(body: RegisterSchema): Promise<ServiceResponse> {
  const { email, password } = body

  const isUserExists = !!(await User.findOne({ email }))

  if (isUserExists) {
    return {
      error: 'the user alredy exists',
    }
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    ...body,
    password: hashedPassword,
  })

  return {
    data: user,
    error: null,
  }
}

export default registerService
