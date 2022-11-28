import Company from '../../src/models/Company'

test('should create a company', () => {
  const name = 'Ponto Menos'

  const company = new Company({
    cnpj: '123.123.123.01',
    email: 'vinicius@pontomenos.com',
    name
  })

  expect(company.name).toBe(name)
})

test('should not have id', () => {
  const name = 'Ponto Menos'

  const company = new Company({
    cnpj: '123.123.123.01',
    email: 'vinicius@pontomenos.com',
    name
  })

  expect(company.id).toBeUndefined()
})
