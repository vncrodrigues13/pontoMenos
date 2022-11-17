import { Router } from 'express'
import { UserServices } from '../../domain/users/UserServices'
import UserForm from '../../forms/users/UserForm'

const userRouter = Router()

userRouter.get('/', async (req, res) => {

  const userServices = new UserServices()

  const users = await userServices.findAll()

  res.send(users)
})

userRouter.get('/{id}', (req, res) => {
  res.send('find user by id')
})

userRouter.post('/', (req, res) => {
  let user : UserForm

  user = req.body.user

  console.log(user)
})

export default userRouter
