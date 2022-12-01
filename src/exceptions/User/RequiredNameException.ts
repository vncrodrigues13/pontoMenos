export default class RequiredNameException extends Error {
  static MESSAGE = 'Users name is required'
  constructor () {
    super(RequiredNameException.MESSAGE)
  }
}
