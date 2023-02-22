export default class NotExistCompanyException extends Error {
  static MESSAGE = 'Company doesn\'t exist'
  constructor () {
    super(NotExistCompanyException.MESSAGE)
  }
}
