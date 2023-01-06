import { Router } from 'express'
import { loginUser, registerUser, getMe } from '../controllers/userController'
import { registerValidation, loginValidation, protect } from '../middlewares'

const userRoute: Router = Router()

userRoute.post('/', registerValidation, registerUser)
userRoute.post('/login', loginValidation, loginUser)
userRoute.get('/me', protect, getMe)

export { userRoute }
