import { SignUpController } from './signup'

describe('Signup Controller', () => {
  test('should return 400 if no name is provided', () => {
    // (SUT) is acronym to: System Under Test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
