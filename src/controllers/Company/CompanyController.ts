import { Router, Request, Response } from 'express'
import CompanyService from '../../domain/company/CompanyServices'
import CompanyFactory from '../../factories/Company/CompanyFactory'

const companyRouter = Router()

companyRouter.get('/', async (req: Request, res: Response) => {
  const companies = CompanyService.findAll()

  res.send(companies)
})

companyRouter.post('/', async (req: Request, res: Response) => {

    let company = req.body.company

    company = CompanyFactory.buildCompany(company)

    CompanyService.
})

export default companyRouter
