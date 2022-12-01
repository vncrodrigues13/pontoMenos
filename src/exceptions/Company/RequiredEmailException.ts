export default class RequiredEmailException extends Error {
  static MESSAGE = 'Company email is required'
  constructor () {
    super(RequiredEmailException.MESSAGE)
  }
}
