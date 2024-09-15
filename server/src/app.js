import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { userRouter } from './routes/userRoute.js'

dotenv.config()

const app = express()

const allowedOrigins = process.env.CORS_ORIGN.split(',')

const corsOptions = {
  origin: (origin, callback) => {
    // jab origin na ho tab bhi allow hona chahiye jaise mobile apps ya curl request ke samay
    if (!origin || allowedOrigins.inclues(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

app.use(cors(corsOptions))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser())

app.use('/api/v1/user', userRouter)

export { app }