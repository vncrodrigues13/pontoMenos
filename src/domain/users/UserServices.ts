import User from "../../models/User";
import { DataSource, DataSourceOptions} from 'typeorm'
import { AppDataSource } from "../../data-source";

var userRepository = AppDataSource.getRepository(User)

export class UserServices {

    async findAll() : Promise<User[] | []> {
       const allUsers = await userRepository.find()
       return allUsers
    }
}