import { Request, Response, NextFunction } from 'express'
import { validateLoginSchema } from '../validations/validateLoginSchema'
import { validator } from './validator'

export const loginValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validator(req, res, next, validateLoginSchema)
}
