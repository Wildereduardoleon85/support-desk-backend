import { UserModel } from '../models'
import { RegisterSchema, ServiceResponse, UserResponse } from '../types'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils'

async function registerService(
  body: RegisterSchema
): Promise<ServiceResponse<UserResponse>> {
  const { email: bodyEmail, password } = body

  const isUserExists = !!(await UserModel.findOne({ email: bodyEmail }))

  if (isUserExists) {
    return {
      error: 'the user alredy exists',
      statusCode: 400,
    }
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const { _id, name, email } = await UserModel.create({
    ...body,
    password: hashedPassword,
  })

  return {
    data: { _id, name, email, token: generateToken(_id) },
    error: null,
    statusCode: 201,
  }
}

export default registerService
