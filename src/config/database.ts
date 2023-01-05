import mongoose from 'mongoose'

const mongoURI: string = String(process.env.MONGO_URI)

mongoose.set('strictQuery', false)

async function connectDb() {
  try {
    const { connection } = await mongoose.connect(mongoURI)
    console.log(
      '\x1b[36m',
      '\x1b[4m',
      '\x1b[1m',
      `MongoDB connected: ${connection.host}`,
      '\x1b[0m'
    )
  } catch (error: any) {
    console.log('\x1b[31m', `Error: ${error.message}`, '\x1b[0m')
    process.exit(1)
  }
}

export default connectDb
