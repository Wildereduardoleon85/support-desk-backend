import { validatePassword } from '../../src/utils/validatePassword'

describe('validatePassword', () => {
  describe('Given a valid password', () => {
    it('should return isValid to true with no message', () => {
      const result = validatePassword('John123*')

      expect(result).toEqual({
        isValid: true,
        message: '',
      })
    })
  })

  describe('Given no password', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validatePassword(undefined)

      expect(result).toEqual({
        isValid: false,
        message: 'field password is required',
      })
    })
  })

  describe('When the password is not a string', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validatePassword(45)

      expect(result).toEqual({
        isValid: false,
        message: 'field password must be a string',
      })
    })
  })

  describe('When the value supplied is less than 6 characters', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validatePassword('John1')

      expect(result).toEqual({
        isValid: false,
        message: 'field password must be at least 6 characters',
      })
    })
  })

  describe('When the value supplied is greater than 10 characters', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validatePassword('John134567000')

      expect(result).toEqual({
        isValid: false,
        message: 'field password must must not exceed 10 characters',
      })
    })
  })

  describe('Gievn a value that not match with the regex', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validatePassword('John123')

      expect(result).toEqual({
        isValid: false,
        message:
          'field password must contain: Uppercase letter, Lowercase letter, number and a special character',
      })
    })
  })
})
