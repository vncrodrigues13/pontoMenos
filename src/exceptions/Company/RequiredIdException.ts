export default class RequiredIdException extends Error {
  static MESSAGE = 'Company ID is required'
  constructor () {
    super(RequiredIdException.MESSAGE)
  }
}
