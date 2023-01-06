import { Request, Response, NextFunction } from 'express'

export const validator = (
  req: Request,
  res: Response,
  next: NextFunction,
  schemaValidationMethod: Function
) => {
  const errors = schemaValidationMethod(req)

  if (errors.length) {
    res.status(400)
    throw new Error(errors.join(', '))
  }

  next()
}
