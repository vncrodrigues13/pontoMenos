import User from "../../models/User";
import { DataSource, DataSourceOptions} from 'typeorm'
import { AppDataSource } from "../../data-source";

var userRepository = AppDataSource.getRepository(User)

export class UserServices {

    async findAll() : Promise<User[] | []> {
       const allUsers = await userRepository.find()
       return allUsers
    }

    async findById(userId: string): Promise<User | null> {
        const user = await userRepository.findOneBy({
            id: userId
        })

        return user
    }

    async addUser(user: User): Promise<User | null> {

        console.log(user, 'user')
        const savedUser = await userRepository.save(user)

        return savedUser
    }

    async updateUser(user: User) : Promise<User | null> { 

        const updatedUser = await userRepository.save(user)

        return updatedUser;
    }
}