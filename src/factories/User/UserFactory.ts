import UserForm from '../../forms/user/UserForm'
import User from '../../models/User'
import RequiredNameException from '../../exceptions/User/RequiredNameException'
import RequiredEmailException from '../../exceptions/User/RequiredEmailException'
import ValidatorUtil from '../../utils/ValidatorUtil'

export default class UserFactory {
  static buildUser (userForm: UserForm) : User {
    const user = new User()

    setName()

    setEmail()

    user.cpf = userForm.cpf

    const userId = userForm.id

    if (userId) {
      user.id = userId
    }

    const isActive = userForm.active

    if (isActive) {
      user.active = isActive
    }

    return user

    function setName () {
      if (ValidatorUtil.isNullOrEmpty(userForm.name)) {
        throw new RequiredNameException()
      }

      user.name = userForm.name
    }

    function setEmail () {
      if (ValidatorUtil.isNullOrEmpty(userForm.email)) {
        throw new RequiredEmailException()
      }

      user.email = userForm.email
    }
  }
}
