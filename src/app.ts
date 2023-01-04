import express from 'express'
import { userRoute } from './routes'
import dotenv from 'dotenv'
import { errorHandler } from './middlewares/errorHandler'

dotenv.config()

const app = express()

const port: number | string = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', userRoute)

app.use(errorHandler)

app.listen(port, () => console.log(`app listening in port ${port}`))
