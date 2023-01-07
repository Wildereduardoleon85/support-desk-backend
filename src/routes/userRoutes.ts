import { Router } from 'express'
import { loginUser, registerUser, getMe } from '../controllers/userController'
import { registerValidation, loginValidation, protect } from '../middlewares'

const userRoutes: Router = Router()

userRoutes.post('/', registerValidation, registerUser)
userRoutes.post('/login', loginValidation, loginUser)
userRoutes.get('/me', protect, getMe)

export { userRoutes }
