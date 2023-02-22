import RequiredCNPJException from '../../exceptions/Company/RequiredCNPJException'
import RequiredEmailException from '../../exceptions/Company/RequiredEmailException'
import RequiredNameException from '../../exceptions/Company/RequiredNameException'
import CompanyForm from '../../forms/company/CompanyForm'
import Company from '../../models/Company'
import ValidatorUtil from '../../utils/ValidatorUtil'

export default class CompanyFactory {
  static buildCompany (companyForm: CompanyForm): Company {
    const company = new Company()
    company.id = (companyForm?.id) ? companyForm.id : '0'
    setName()
    setEmail()
    setCNPJ()

    return company

    function setName () {
      if (ValidatorUtil.isNullOrEmpty(companyForm.name)) {
        throw new RequiredNameException()
      }
      company.name = companyForm.name
    }

    function setEmail () {
      if (ValidatorUtil.isNullOrEmpty(companyForm.email)) {
        throw new RequiredEmailException()
      }
      company.email = companyForm.email
    }

    function setCNPJ () {
      if (ValidatorUtil.isNullOrEmpty(companyForm.cnpj)) {
        throw new RequiredCNPJException()
      }
      company.cnpj = companyForm.cnpj
    }
  }
}
