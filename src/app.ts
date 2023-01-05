require('dotenv').config()
import express from 'express'
import { userRoute } from './routes'
import { errorHandler } from './middlewares/errorHandler'
import connectDb from './config/database'

connectDb()

const app = express()

const port: number | string = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', userRoute)

app.use(errorHandler)

app.listen(port, () => console.log(`server running on port ${port}`))
