import { Router, Request, Response, response } from 'express'
import CompanyService from '../../domain/company/CompanyServices'
import RequiredIdException from '../../exceptions/Company/RequiredIdException'
import CompanyFactory from '../../factories/Company/CompanyFactory'
import CompanyForm from '../../forms/company/CompanyForm'

const companyRouter = Router()

companyRouter.get('/', async (req: Request, res: Response) => {
  const companies = await CompanyService.findAll()

  res.send(companies)
})

companyRouter.get('/find-by-email/:email', async (req: Request, res: Response) => {
  const email = req.params.email

  const company = await CompanyService.findByEmail(email)

  if (company) {
    // doesn't exist company with this email address
  }

  return res.send(company)
})

companyRouter.get('/find-by-cnpj/:cnpj', async (req: Request, res: Response) => {
  const cnpj = req.params.cnpj

  const company = await CompanyService.findByCNPJ(cnpj)

  if (company) {
    // doesn't exist company with this email address
  }

  return res.send(company)
})

companyRouter.post('/', async (req: Request, res: Response) => {
  let company = req.body.company

  company = CompanyFactory.buildCompany(company)

  CompanyService.addCompany(company).then((addedCompany) => {
    res.send(addedCompany)
  }).catch((e) => {
    res.status(400).send(e.message)
  })
})

companyRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) {
    res.status(400).send(RequiredIdException.MESSAGE)
  }

  let { company } = req.body
  company = CompanyFactory.buildCompany(company)
  CompanyService.updateCompany(company).then((updatedCompany) => {
    res.send(updatedCompany)
  }).catch((e) => {
    res.status(400).send(e.message)
  })
})

export default companyRouter
