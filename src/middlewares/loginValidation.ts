import { Request, Response, NextFunction } from 'express'
import { validateLoginSchema } from '../validations/validateLoginSchema'

export default function (req: Request, res: Response, next: NextFunction) {
  const errors = validateLoginSchema(req)

  if (errors.length) {
    res.status(400)
    throw new Error(errors.join(', '))
  }

  next()
}
