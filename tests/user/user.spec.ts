import UserFactory from '../../src/factories/User/UserFactory'
import RequiredNameException from '../../src/exceptions/Users/RequiredNameException'
import RequiredEmailException from '../../src/exceptions/Users/RequiredEmailException'
import UserForm from '../../src/forms/users/UserForm'

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

test('should not be abble to create an user without a email', ()=> {
    expect(() => {
        UserFactory.buildUser({
            cpf: '123.123.123-31',
            active: true,
            name: 'John Doe',
            email: ''
        })
    }).toThrowError(RequiredEmailException.MESSAGE)
})


