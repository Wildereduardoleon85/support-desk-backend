import User from '../models/UserModel'
import { RegisterSchema, RegisterService } from '../types'
import bcrypt from 'bcryptjs'

async function registerService(body: RegisterSchema): Promise<RegisterService> {
  const { email, password } = body

  const isUserExists = !!(await User.findOne({ email }))

  if (isUserExists) {
    return {
      data: null,
      message: 'the user alredy exists',
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
    message: 'user created',
  }
}

export default registerService
