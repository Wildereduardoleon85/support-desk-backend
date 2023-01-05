import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/userController'
import registerValidation from '../middlewares/registerValidation'
import loginValidation from '../middlewares/loginValidation'

const userRoute: Router = Router()

userRoute.post('/', registerValidation, registerUser)

userRoute.post('/login', loginValidation, loginUser)

export { userRoute }
