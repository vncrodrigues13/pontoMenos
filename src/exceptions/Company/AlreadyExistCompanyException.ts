export default class AlreadyExistCompanyException extends Error {
  static MESSAGE = 'Company already exist'
  constructor () {
    super(AlreadyExistCompanyException.MESSAGE)
  }
}
