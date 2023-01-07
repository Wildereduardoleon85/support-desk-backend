import { Request } from 'express'
import { Schema } from 'mongoose'

export type SchemaValidation = {
  isValid: boolean
  message: string
}

export type UserResponse = {
  _id: string
  name: string
  email: string
  token?: string
}

export type User = {
  _id: string
  name: string
  email: string
  password: string
  isAdmin: boolean
}

export type LoginSchema = {
  email: string
  password: string
}

export interface RegisterSchema extends LoginSchema {
  name: string
}

export type ServiceResponse<T> = {
  data?: T
  error: string | null
  statusCode: number
}

export interface AuthRequest extends Request {
  user?: User
}

export type Ticket = {
  _id: string
  user: Schema.Types.ObjectId
  product: 'iPhone' | 'Macbook Pro' | 'iPad' | 'iMac'
  description: string
  status: 'new' | 'open' | 'closed'
}
