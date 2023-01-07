import { generateToken } from '../../src/utils/generateToken'

describe('generateToken', () => {
  it('should generate a token', () => {
    const token = generateToken('some id')

    expect(token).toBeTruthy()
    expect(typeof token).toBe('string')
  })
})
