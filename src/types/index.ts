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

export type RegisterSchema = {
  name: string
  password: string
  email: string
}

export type RegisterService = {
  data: User | null
  message: string
}
