import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'

//rest of the packages
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

//connectDB
import connectDB from './db/connectDB.js'

//routers
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import projectRouter from './routes/projectRoutes.js'
import ticketRouter from './routes/ticketRoutes.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/projects', projectRouter)
app.use('/api/v1/tickets', ticketRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = () => {
  try {
    connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
