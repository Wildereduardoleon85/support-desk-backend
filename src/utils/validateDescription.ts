import { SchemaValidation } from '../types'

export const validateDescription = (description: any): SchemaValidation => {
  if (!description) {
    return {
      isValid: false,
      message: 'field description is required',
    }
  }

  if (typeof description !== 'string') {
    return {
      isValid: false,
      message: 'field description must be a string',
    }
  }

  if (description.trim().length === 0) {
    return {
      isValid: false,
      message: 'field description must not be empty',
    }
  }

  if (description.trim().length < 3) {
    return {
      isValid: false,
      message: 'field description must be at least 3 characters',
    }
  }

  return {
    isValid: true,
    message: '',
  }
}
