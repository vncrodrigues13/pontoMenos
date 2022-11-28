export default class RequiredIdException extends Error {

    static MESSAGE = 'Users id is required'
    constructor() {
        super(RequiredIdException.MESSAGE)
    }
}