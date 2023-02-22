import User from '../../models/User'
import { AppDataSource } from '../../data-source'
import RequiredIdException from '../../exceptions/User/RequiredIdException'
import UserNotFoundException from '../../exceptions/User/UserNotFoundException'

const userRepository = AppDataSource.getRepository(User)

export class UserServices {
  static async findAll () : Promise<User[] | []> {
    const allUsers = await userRepository.find()
    return allUsers
  }

  static async findById (userId: string): Promise<User> {
    if (!userId) {
      throw new RequiredIdException()
    }

    const user = await userRepository.findOneBy({
      id: userId
    })

    if (!user) {
      throw new UserNotFoundException()
    }

    return user
  }

  static async findActives (): Promise<User[] | []> {
    const activeUsersList = await userRepository.findBy({
      active: true
    })

    return activeUsersList
  }

  static async addUser (userToAdd: User): Promise<User | null> {
    const savedUser = await userRepository.save(userToAdd)

    return savedUser
  }

  static async updateUser (userToUpdate: User): Promise<User | null> {
    if (!userToUpdate.id) {
      throw new RequiredIdException()
    }

    const updatedUser = await userRepository.save(userToUpdate)

    return updatedUser
  }

  static async deleteUser (id: string) {
    const userToDelete = await this.findById(id)

    userToDelete.active = false

    this.updateUser(userToDelete)
  }
}
