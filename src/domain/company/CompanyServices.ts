import { AppDataSource } from '../../data-source'
import Company from '../../models/Company'

const companyRepo = AppDataSource.getRepository(Company)

export default class CompanyService {
  static async findAll (): Promise<Company[] | []> {
    const companies = await companyRepo.find()

    return companies
  }

  static async addCompany (company: Company): Promise<Company> {
    const addedCompany = companyRepo.save(company)

    return addedCompany
  }
}
