import { AppDataSource } from '../../data-source'
import AlreadyExistCompanyException from '../../exceptions/Company/AlreadyExistCompanyException'
import NotExistCompanyException from '../../exceptions/Company/NotExistCompanyException'
import RequiredIdException from '../../exceptions/Company/RequiredIdException'
import Company from '../../models/Company'

const companyRepo = AppDataSource.getRepository(Company)

export default class CompanyService {
  static async findAll (): Promise<Company[] | []> {
    const companies = await companyRepo.find()
    return companies
  }

  static async findById (id: string): Promise<Company | null> {
    const company = await companyRepo.findOneBy({
      id
    })

    return company
  }

  static async findByCNPJ (cnpj: string): Promise<Company | null> {
    return await companyRepo.findOne({
      where: {
        cnpj
      }
    })
  }

  static async countByCNPJ (cnpj: string): Promise<number> {
    return await companyRepo.count({
      where: {
        cnpj
      }
    })
  }

  static async findByEmail (email: string): Promise<Company | null> {
    return await companyRepo.findOne({
      where: {
        email
      }
    })
  }

  static async countByEmail (email: string): Promise<number> {
    return await companyRepo.count({
      where: {
        email
      }
    })
  }

  static async existElements (email: string, cnpj: string): Promise<boolean> {
    const foundedAmount = await this.countCompanies(email, cnpj)

    return foundedAmount > 0
  }

  static async countCompanies (email: string, cnpj: string): Promise<number> {
    return await companyRepo.count({
      where: {
        cnpj,
        email
      }
    })
  }

  static async addCompany (company: Company): Promise<Company> {
    if (await this.validateExistingCompany(company)) {
      throw new AlreadyExistCompanyException()
    }
    const addedCompany = await companyRepo.save(company)

    return addedCompany
  }

  static async updateCompany (company: Company): Promise<Company> {
    if (!company.id) {
      throw new RequiredIdException()
    }

    if (!(await this.validateExistingCompany(company))) {
      throw new NotExistCompanyException()
    }

    return companyRepo.save(company)
  }

  static async validateExistingCompany (company: Company) {
    return this.validateExistingCompanyByCnpjAndEmail(company.cnpj, company.email)
  }

  static async validateExistingCompanyByCnpjAndEmail (cnpj: string, email: string) {
    const cnpjCount = await this.countByCNPJ(cnpj)
    const mailCount = await this.countByEmail(email)

    return (cnpjCount + mailCount) > 0
  }
}
