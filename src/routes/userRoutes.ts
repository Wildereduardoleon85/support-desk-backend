import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/userController'

const userRoute: Router = Router()

userRoute.post('/', registerUser)

userRoute.post('/login', loginUser)

export { userRoute }
