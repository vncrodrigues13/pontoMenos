export default class RequiredNameException extends Error {
  static MESSAGE = 'Company name is required'
  constructor () {
    super(RequiredNameException.MESSAGE)
  }
}
