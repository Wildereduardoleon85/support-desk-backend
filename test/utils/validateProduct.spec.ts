import { validateProduct } from '../../src/utils/validateProduct'

describe('validateProduct', () => {
  describe('Given a valid product', () => {
    it('should return isValid to true with no message', () => {
      const result = validateProduct('iPhone')

      expect(result).toEqual({
        isValid: true,
        message: '',
      })
    })
  })

  describe('Given no product', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateProduct(undefined)

      expect(result).toEqual({
        isValid: false,
        message: 'field product is required',
      })
    })
  })

  describe('When the product is not a string', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateProduct(45)

      expect(result).toEqual({
        isValid: false,
        message: 'field product must be a string',
      })
    })
  })

  describe('When the value supplied is an empty string', () => {
    it('should return isValid to false with the corresponding message', () => {
      const result = validateProduct('  ')

      expect(result).toEqual({
        isValid: false,
        message: 'field product must not be empty',
      })
    })
  })
})
