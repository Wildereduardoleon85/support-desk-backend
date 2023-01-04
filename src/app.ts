import express, { Request, Response } from 'express'

const app = express()

app.get('/', (_req: Request, res: Response) => {
  res.send('hello')
})

app.listen(5000, () => console.log('app listening in port 5000'))
