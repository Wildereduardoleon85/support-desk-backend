import { Request, Response } from 'express'

export const registerUser = (_req: Request, res: Response): void => {
  res.send('Register route')
}

export const loginUser = (_req: Request, res: Response): void => {
  res.send('Login route')
}
