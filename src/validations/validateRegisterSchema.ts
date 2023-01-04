import { Request } from 'express'
import { validateEmail, validateName, validatePassword } from '../utils'

export const validateRegisterSchema = (req: Request): string[] => {
  const { name, email, password } = req.body

  const errors: string[] = []

  const { isValid: emailIsValid, message: emailMessage } = validateEmail(email)
  const { isValid: nameIsValid, message: nameMessage } = validateName(name)
  const { isValid: passwordIsValid, message: passwordMessage } =
    validatePassword(password)

  if (!nameIsValid) {
    errors.push(nameMessage)
  }

  if (!emailIsValid) {
    errors.push(emailMessage)
  }

  if (!passwordIsValid) {
    errors.push(passwordMessage)
  }

  return errors
}
