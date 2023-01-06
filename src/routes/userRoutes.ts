import { Router } from 'express'
import { loginUser, registerUser, getMe } from '../controllers/userController'
import registerValidation from '../middlewares/registerValidation'
import loginValidation from '../middlewares/loginValidation'
import protect from '../middlewares/authMiddleware'

const userRoute: Router = Router()

userRoute.post('/', registerValidation, registerUser)
userRoute.post('/login', loginValidation, loginUser)
userRoute.get('/me', protect, getMe)

export { userRoute }
