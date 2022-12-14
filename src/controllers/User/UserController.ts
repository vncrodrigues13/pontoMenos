import { Response, Request, Router } from 'express'
import { UserServices } from '../../domain/users/UserServices'
import UserFactory from '../../factories/User/UserFactory'
import UserForm from '../../forms/user/UserForm'
import User from '../../models/User'

const userRouter = Router()

userRouter.get('/find-all/', async (req: Request, res: Response) => {
  const users = await UserServices.findAll()

  res.send(users)
})

userRouter.get('/find-by-id/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  UserServices.findById(id).then((foundedUser) => {
    res.send(foundedUser)
  }).catch((e) => {
    res.send('not founded user')
  })
})

userRouter.get('/', async (req: Request, res: Response) => {
  const users = await UserServices.findActives()

  res.send(users)
})

userRouter.post('/', async (req: Request, res: Response) => {
  const userForm : UserForm = req.body.user

  const user : User = UserFactory.buildUser(userForm)

  const addedUser = await UserServices.addUser(user)

  res.send(addedUser)
})

userRouter.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  const userForm : UserForm = {
    ...req.body.user,
    id
  }

  const user : User = UserFactory.buildUser(userForm)

  const updatedUser = await UserServices.updateUser(user)

  res.send(updatedUser)
})

userRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  UserServices.deleteUser(id)

  res.send('deleted user')
})

export default userRouter
