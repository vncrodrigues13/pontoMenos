import Company from '../../models/Company'
import AppDataSource from '../../data-source'


var userRepository = AppDataSource.getRepository(Company)


export default class CompanyService {
    static async findAll(): Promise<Company[] | []> {

    }
}