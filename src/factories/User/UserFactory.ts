import UserForm from '../../forms/UserForm'
import User from '../../models/User'
import RequiredNameException from '../../exceptions/User/RequiredNameException'
import RequiredEmailException from '../../exceptions/User/RequiredEmailException'
import ValidatorUtil from '../../utils/ValidatorUtil'
import CompanyService from '../../domain/company/CompanyServices'

export default class UserFactory {
  static async buildUser (userForm: UserForm) : Promise<User> {
    const user = new User()

    setName()

    setEmail()

    setCompanyId()

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

    async function setCompanyId () {
      const companyId = userForm.companyId
      if (companyId && ValidatorUtil.isNotNullOrEmpty(companyId)) {
        const company = await CompanyService.findById(companyId)
        if (company) {
          user.company = company
        }
      }
    }
  }
}
