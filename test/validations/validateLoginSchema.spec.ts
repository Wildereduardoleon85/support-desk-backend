import { validateLoginSchema } from '../../src/validations/validateLoginSchema'
import { Request } from 'express'

describe('validateLoginSchema', () => {
  describe('Given a valid schema', () => {
    it('should return an empty array', () => {
      const validSchema = {
        body: {
          email: 'pete@email.com',
          password: 'Pete123*',
        },
      }

      const validationResult = validateLoginSchema(validSchema as Request)

      expect(validationResult).toEqual([])
    })
  })

  describe('Given a not valid email schema', () => {
    it('should return an array with an email error message', () => {
      const validSchema = {
        body: {
          email: 'pete.com',
          password: 'Pete123*',
        },
      }

      const validationResult = validateLoginSchema(validSchema as Request)

      expect(validationResult).toEqual(['field email is invalid'])
    })
  })

  describe('When no password is supplied', () => {
    it('should return an array with an password error message', () => {
      const validSchema = {
        body: {
          email: 'pete@email.com',
        },
      }

      const validationResult = validateLoginSchema(validSchema as Request)

      expect(validationResult).toEqual(['the field password is required'])
    })
  })
})
