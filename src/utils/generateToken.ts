import jwt from 'jsonwebtoken'

const secret: string = String(process.env.JWT_SECRET)

export function generateToken(id: string) {
  return jwt.sign({ id }, secret, { expiresIn: '30d' })
}
