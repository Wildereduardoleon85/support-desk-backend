import { Request, Response, NextFunction } from 'express'
import { validateCreateTicketSchema } from '../validations/validateCreateTicketSchema'
import { validator } from './validator'

export const createTicketValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  validator(req, res, next, validateCreateTicketSchema)
}
