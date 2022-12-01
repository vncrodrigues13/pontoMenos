export default class RequiredCNPJException extends Error {
  static MESSAGE = 'Company name is required'
  constructor () {
    super(RequiredCNPJException.MESSAGE)
  }
}
