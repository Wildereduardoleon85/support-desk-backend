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
  data?: User
  error: string | null
}
