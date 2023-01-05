import { Request, Response, NextFunction } from 'express'
import { validateRegisterSchema } from '../validations/validateRegisterSchema'

export default function (req: Request, res: Response, next: NextFunction) {
  const errors = validateRegisterSchema(req)

  if (errors.length) {
    res.status(400)
    throw new Error(errors.join(', '))
  }

  next()
}
