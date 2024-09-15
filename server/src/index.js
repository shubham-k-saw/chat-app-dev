import dotenv from 'dotenv'
import { server } from './server.js'
dotenv.config()

const PORT = process.env.PORT || 8000

const startServer = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`)
    })
  } catch (error) {
    console.log('Error during server setup: ', error)
    process.exit(1)
  }
}

startServer()