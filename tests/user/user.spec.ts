import UserFactory from '../../src/factories/User/UserFactory'
import RequiredNameException from '../../src/exceptions/User/RequiredNameException'
import RequiredEmailException from '../../src/exceptions/User/RequiredEmailException'

test('should not be abble to create an user without a name', () => {
  expect(() => {
    UserFactory.buildUser({
      cpf: '123.123.123-31',
      active: true,
      name: '',
      email: 'johndoe@mail.com'
    })
  }).toThrowError(RequiredNameException.MESSAGE)
})

test('should not be abble to create an user without a email', () => {
  expect(() => {
    UserFactory.buildUser({
      cpf: '123.123.123-31',
      active: true,
      name: 'John Doe',
      email: ''
    })
  }).toThrowError(RequiredEmailException.MESSAGE)
})
