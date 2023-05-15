import { Response, Request, Router } from 'express'
import { UserServices } from '../../domain/users/UserServices'
import UserFactory from '../../factories/User/UserFactory'
import UserForm from '../../forms/UserForm'
import User from '../../models/User'

const userRouter = Router()

userRouter.get('/', async (req: Request, res: Response) => {
  const users = await UserServices.findActives()

  res.send(users)
})

userRouter.get('/find-all/', async (req: Request, res: Response) => {
  const users = await UserServices.findAll()

  res.send(users)
})

userRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  UserServices.findById(id).then((foundedUser) => {
    res.send(foundedUser)
  }).catch((e) => {
    res.send('not founded user')
  })
})

userRouter.post('/', async (req: Request, res: Response) => {
  const userForm : UserForm = req.body.user

  try {
    const user : User = await UserFactory.buildUser(userForm)
    const addedUser = await UserServices.addUser(user)

    res.send(addedUser)
  } catch (e) {
    res.status(400).send(e)
  }
})

userRouter.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  const userForm : UserForm = {
    ...req.body.user,
    id
  }
  try {
    const user : User = await UserFactory.buildUser(userForm)

    const updatedUser = await UserServices.updateUser(user)

    res.send(updatedUser)
  } catch (e) {
    res.status(400).send('fail update user')
  }
})

userRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  UserServices.deleteUser(id).then(function () {
    res.send('deleted user')
  }).catch((e) => {
    res.status(400).send('fail deleting user')
  })
})

export default userRouter
