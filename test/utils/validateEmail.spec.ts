import { validateEmail } from '../../src/utils/validateEmail'

describe('validateEmail', () => {
  describe('Given a valid email', () => {
    it('should return isValid to true with no message', () => {
      const result = validateEmail('jdoe@email.com')

      expect(result).toEqual({
        isValid: true,
        message: '',
      })
    })
  })

  describe('Given no email', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateEmail(undefined)

      expect(result).toEqual({
        isValid: false,
        message: 'field email is required',
      })
    })
  })

  describe('When the email is not a string', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateEmail(45)

      expect(result).toEqual({
        isValid: false,
        message: 'field email must be a string',
      })
    })
  })

  describe('When the value supplied does not match the regex', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateEmail('jdoe.com')

      expect(result).toEqual({
        isValid: false,
        message: 'field email is invalid',
      })
    })
  })
})
