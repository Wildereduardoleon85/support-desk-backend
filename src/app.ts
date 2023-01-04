import express from 'express'
import { userRoute } from './routes'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use('/api/users', userRoute)

const port: number | string = process.env.PORT || 5000

app.listen(port, () => console.log(`app listening in port ${port}`))
