import * as utils from '../../src/utils'

describe('index barrel export file', () => {
  it('should have all the corresponding export keys', () => {
    expect(Object.keys(utils)).toEqual([
      'validateEmail',
      'validateName',
      'validatePassword',
      'generateToken',
      'validateDescription',
      'validateProduct',
    ])
  })
})
