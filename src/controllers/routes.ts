import { Router } from 'express'
import userRouter from './User/UserController'

const router = Router()

router.use('/users', userRouter)

export default router
