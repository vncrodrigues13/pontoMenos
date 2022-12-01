import RequiredNameException from '../../src/exceptions/Company/RequiredNameException'
import RequiredEmailException from '../../src/exceptions/Company/RequiredEmailException'
import RequiredCNPJException from '../../src/exceptions/Company/RequiredCNPJException'
import CompanyFactory from '../../src/factories/Company/CompanyFactory'

const name = 'Ponto Menos'
const email = 'vinicius@pontomenos.com'
const cnpj = '123.123.123.01'

test('should create a company', () => {
  const company = CompanyFactory.buildCompany({
    cnpj,
    email,
    name
  })

  expect(company.name).toBe(name)
  expect(company.id).not.toBeUndefined()
  expect(company.email).toBe(email)
  expect(company.cnpj).toBe(cnpj)
})

test('should thrown a error when the company name is empty or null', () => {
  expect(() => {
    CompanyFactory.buildCompany({
      cnpj,
      email,
      id: 'asdasdsa',
      name: ''
    })
  }).toThrow(RequiredNameException.MESSAGE)
})

test('should throw a error when the company email is empty or null', () => {
  expect(() => {
    CompanyFactory.buildCompany({
      cnpj,
      email: '',
      name
    })
  }).toThrow(RequiredEmailException.MESSAGE)
})

test('should throw a error when the company cnpj is empty or null', () => {
  expect(() => {
    CompanyFactory.buildCompany({
      cnpj: '',
      email,
      name
    })
  }).toThrow(RequiredCNPJException.MESSAGE)
})
