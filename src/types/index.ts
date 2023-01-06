import { Request } from 'express'

export type SchemaValidation = {
  isValid: boolean
  message: string
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

export type ServiceResponse = {
  data?: {
    _id: string
    name: string
    email: string
    token: string
  }
  error: string | null
  statusCode: number
}

export interface AuthRequest extends Request {
  user?: User
}
