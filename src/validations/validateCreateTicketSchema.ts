import { Request } from 'express'
import { validateProduct, validateDescription } from '../utils'

export const validateCreateTicketSchema = (req: Request): string[] => {
  const { product, description } = req.body

  const errors: string[] = []

  const productValidation = validateProduct(product)
  const descriptionValidation = validateDescription(description)

  if (!productValidation.isValid) {
    errors.push(productValidation.message)
  }

  if (!descriptionValidation.isValid) {
    errors.push(descriptionValidation.message)
  }

  return errors
}
