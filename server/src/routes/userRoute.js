import { Router } from 'express'
import { getUser, loginUser, logoutUser, signupUser } from '../controllers/userController.js'

const userRouter = Router()

// authentication se juda hua
userRouter.route('/').get(getUser)
userRouter.route('/signup').post(signupUser)
userRouter.route('/login').post(loginUser)
userRouter.route('/logout').delete(logoutUser)

userRouter.route('/send-otp').post()
userRouter.route('/verify-otp').post()

userRouter.route('/change-password').put()
userRouter.route('/')

export { userRouter }