import { SchemaValidation } from '../types'

export const validateProduct = (product: any): SchemaValidation => {
  if (!product) {
    return {
      isValid: false,
      message: 'field product is required',
    }
  }

  if (typeof product !== 'string') {
    return {
      isValid: false,
      message: 'field product must be a string',
    }
  }

  if (product.trim().length === 0) {
    return {
      isValid: false,
      message: 'field product must not be empty',
    }
  }

  return {
    isValid: true,
    message: '',
  }
}
