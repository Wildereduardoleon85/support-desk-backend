import { validateRegisterSchema } from '../../src/validations/validateRegisterSchema'
import { Request } from 'express'

describe('validateRegisterSchema', () => {
  describe('Given a valid schema', () => {
    it('should return an empty array', () => {
      const validSchema = {
        body: {
          name: 'Pete',
          email: 'pete@email.com',
          password: 'Pete123*',
        },
      }

      const validationResult = validateRegisterSchema(validSchema as Request)

      expect(validationResult).toEqual([])
    })
  })

  describe('Given a not valid name schema', () => {
    it('should return an array with an name error message', () => {
      const validSchema = {
        body: {
          name: 'P',
          email: 'pete@email.com',
          password: 'Pete123*',
        },
      }

      const validationResult = validateRegisterSchema(validSchema as Request)

      expect(validationResult).toEqual(['field name is invalid'])
    })
  })

  describe('Given a not valid email schema', () => {
    it('should return an array with an email error message', () => {
      const validSchema = {
        body: {
          name: 'Pete',
          email: 'pete.com',
          password: 'Pete123*',
        },
      }

      const validationResult = validateRegisterSchema(validSchema as Request)

      expect(validationResult).toEqual(['field email is invalid'])
    })
  })

  describe('When no password is supplied', () => {
    it('should return an array with an password error message', () => {
      const validSchema = {
        body: {
          name: 'Pete',
          email: 'pete@email.com',
          password: 'Pete12',
        },
      }

      const validationResult = validateRegisterSchema(validSchema as Request)

      expect(validationResult).toEqual([
        'field password must contain: Uppercase letter, Lowercase letter, number and a special character',
      ])
    })
  })
})
