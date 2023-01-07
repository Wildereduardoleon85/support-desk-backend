import { Request } from 'express'

export const validateCreateTicketSchema = (req: Request): string[] => {
  const { description, product } = req.body

  const errors: string[] = []

  if (!product.trim()) {
    errors.push('please add a product')
  }

  if (!description.trim()) {
    errors.push('please add a description')
  }

  if (description.trim().length < 3) {
    errors.push('field description must be at least 3 characters')
  }

  return errors
}
