import { validateDescription } from '../../src/utils/validateDescription'

describe('validateDescription', () => {
  describe('Given a valid description', () => {
    it('should return isValid to true with no message', () => {
      const result = validateDescription('the screen is broken')

      expect(result).toEqual({
        isValid: true,
        message: '',
      })
    })
  })

  describe('Given no description', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateDescription(undefined)

      expect(result).toEqual({
        isValid: false,
        message: 'field description is required',
      })
    })
  })

  describe('When the description is not a string', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateDescription(45)

      expect(result).toEqual({
        isValid: false,
        message: 'field description must be a string',
      })
    })
  })

  describe('When the value supplied is an empty string', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateDescription('  ')

      expect(result).toEqual({
        isValid: false,
        message: 'field description must not be empty',
      })
    })
  })

  describe('When the value supplied is less than 3 characters', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateDescription('th')

      expect(result).toEqual({
        isValid: false,
        message: 'field description must be at least 3 characters',
      })
    })
  })
})
