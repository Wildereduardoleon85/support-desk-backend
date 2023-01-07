import { validateCreateTicketSchema } from '../../src/validations/validateCreateTicketSchema'
import { Request } from 'express'

describe('validateCreateTicketSchema', () => {
  describe('Given a valid schema', () => {
    it('should return an empty array', () => {
      const validSchema = {
        body: {
          product: 'Macbook Pro',
          description: 'it smells like burned',
        },
      }

      const validationResult = validateCreateTicketSchema(
        validSchema as Request
      )

      expect(validationResult).toEqual([])
    })
  })

  describe('Given a not valid product schema', () => {
    it('should return an array with an product error message', () => {
      const validSchema = {
        body: {
          product: 50,
          description: 'it smells like burned',
        },
      }

      const validationResult = validateCreateTicketSchema(
        validSchema as Request
      )

      expect(validationResult).toEqual(['field product must be a string'])
    })
  })

  describe('Given a not valid description schema', () => {
    it('should return an array with an description error message', () => {
      const validSchema = {
        body: {
          product: 'Macbook Pro',
        },
      }

      const validationResult = validateCreateTicketSchema(
        validSchema as Request
      )

      expect(validationResult).toEqual(['field description is required'])
    })
  })
})
