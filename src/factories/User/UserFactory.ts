import UserForm from "../../forms/users/UserForm";
import User from "../../models/User";
import RequiredNameException from '../../exceptions/Users/RequiredNameException'
import RequiredEmailException from '../../exceptions/Users/RequiredEmailException'
import ValidatorUtil from '../../utils/ValidatorUtil'

export default class UserFactory { 

    static buildUser(userForm: UserForm) : User {

        let user = new User()

        this.setName(userForm, user)

        this.setEmail(userForm, user)
        
        user.cpf  = userForm.cpf
        
        let userId = userForm.id

        if (userId) {
            user.id = userId
        }

        let isActive = userForm.active

        if (isActive) {
            user.active = isActive
        }

        return user
    }

    static setName(userForm: UserForm, user: User) {
        if (ValidatorUtil.isNullOrEmpty(userForm.name)) {
            throw new RequiredNameException();
        }

        user.name = userForm.name
    }

    static setEmail(userForm: UserForm, user: User) {
        
        if (ValidatorUtil.isNullOrEmpty(userForm.email)) {
            throw new RequiredEmailException();
        }

        user.email = userForm.email
    }
}