import { validateName } from '../../src/utils/validateName'

describe('validateName', () => {
  describe('Given a valid name', () => {
    it('should return isValid to true with no message', () => {
      const result = validateName('Joshua')

      expect(result).toEqual({
        isValid: true,
        message: '',
      })
    })
  })

  describe('Given no name', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateName(undefined)

      expect(result).toEqual({
        isValid: false,
        message: 'field name is required',
      })
    })
  })

  describe('When the name is not a string', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateName(45)

      expect(result).toEqual({
        isValid: false,
        message: 'field name must be a string',
      })
    })
  })

  describe('When the value supplied is an empty string', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateName('  ')

      expect(result).toEqual({
        isValid: false,
        message: 'field name must not be empty',
      })
    })
  })

  describe('When the value supplied is less than 2 characters', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateName('J')

      expect(result).toEqual({
        isValid: false,
        message: 'field name is invalid',
      })
    })
  })
})
