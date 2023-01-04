import { Request, Response, NextFunction } from 'express'
import { validateRegisterSchema } from '../validations/validateRegisterSchema'

export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validateRegisterSchema(req)

  if (errors.length) {
    res.status(400).json({ msg: errors.join(', ') })
    return
  }

  next()
}
