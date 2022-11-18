import UserForm from "../../forms/users/UserForm";
import User from "../../models/User";

export default class UserFactory { 

    static buildUser(userForm: UserForm) : User {

        let user = new User()

        user.name = userForm.name
        user.cpf  = userForm.cpf
        user.email = userForm.email
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
}