import { Router } from 'express'
import UserForm from '../../forms/users/UserForm'

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.send('find all users')
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
