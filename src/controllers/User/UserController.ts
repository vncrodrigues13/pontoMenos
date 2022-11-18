import { response, Router } from 'express'
import { UserServices } from '../../domain/users/UserServices'
import UserFactory from '../../factories/User/UserFactory'
import UserForm from '../../forms/users/UserForm'
import User from '../../models/User'

const userRouter = Router()

userRouter.get('/', async (req, res) => {

  const userServices = new UserServices()

  const users = await userServices.findAll()

  res.send(users)
})

userRouter.get('/{id}', (req, res) => {
  res.send('find user by id')
})

userRouter.post('/', async (req, res) => {

  let userForm : UserForm = req.body['user']

  let user : User = UserFactory.buildUser(userForm)

  const userServices = new UserServices()

  let addedUser = await userServices.addUser(user)

  response.send(addedUser)
})

export default userRouter
