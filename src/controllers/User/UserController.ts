import { response, Router } from 'express'
import { UserServices } from '../../domain/users/UserServicesImpl'
import UserFactory from '../../factories/User/UserFactory'
import UserForm from '../../forms/users/UserForm'
import User from '../../models/User'

const userRouter = Router()

userRouter.get('/find-all/', async (req, res) => {

  const users = await UserServices.findAll()

  res.send(users)
})

userRouter.get('/find-by-id/:id', async (req, res) => {
  const id = req.params.id
  
  UserServices.findById(id).then((foundedUser) => {
    res.send(foundedUser)
  }).catch((e) => {
    res.send('not founded user')
  })
  
})

userRouter.get('/', async(req, res) => {

  const users = await UserServices.findActives()

  res.send(users)
})

userRouter.post('/', async (req, res) => {

  let userForm : UserForm = req.body['user']

  let user : User = UserFactory.buildUser(userForm)

  let addedUser = await UserServices.addUser(user)

  res.send(addedUser)
})


userRouter.put('/:id', async(req,res) => {

  const id = req.params.id

  let userForm : UserForm = {
    ...req.body.user,
    id
  }

  let user : User = UserFactory.buildUser(userForm)

  const updatedUser = await UserServices.updateUser(user)

  res.send(updatedUser)
})

userRouter.delete('/:id', async(req,res) => {

  const id = req.params.id
  const deleteUser = UserServices.deleteUser(id)

  res.send('deleted user')

})

export default userRouter
