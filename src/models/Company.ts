import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export interface CompanyModel {
  id?: string,
  name: string,
  email: string,
  cnpj: string

}

@Entity()
export default class Company {
  constructor (companyForm: CompanyModel) {
    if (companyForm) {
      this.name = companyForm.name
      this.cnpj = companyForm.cnpj
      this.email = companyForm.email
    }
  }

    @PrimaryGeneratedColumn()
      id: string

    @Column({ nullable: false })
      name: string

    @Column({ nullable: false })
      email: string

    @Column({ nullable: false })
      cnpj: string
}
