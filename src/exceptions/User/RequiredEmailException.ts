export default class RequiredEmailException extends Error {

    static MESSAGE = 'Users email is required'
    constructor() {
        super(RequiredEmailException.MESSAGE)
    }
}