import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/userController'
import registerValidation from '../middlewares/registerValidation'

const userRoute: Router = Router()

userRoute.post('/', registerValidation, registerUser)

userRoute.post('/login', loginUser)

export { userRoute }
