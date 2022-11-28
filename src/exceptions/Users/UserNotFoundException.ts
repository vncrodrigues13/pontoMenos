export default class UserNotFoundException extends Error {

    static MESSAGE = 'User not found'
    constructor() {
        super(UserNotFoundException.MESSAGE)
    }
}