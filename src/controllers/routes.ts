import { Router } from 'express'
import userRouter from './User/UserController'
import companyRouter from './Company/CompanyController'
const router = Router()

router.use('/users', userRouter)
router.use('/companies', companyRouter)

export default router
