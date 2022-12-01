import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export interface CompanyModel {
  id?: string,
  name: string,
  email: string,
  cnpj: string
}

@Entity()
export default class Company {
    @PrimaryGeneratedColumn()
      id: string

    @Column({ nullable: false })
      name: string

    @Column({ nullable: false })
      email: string

    @Column({ nullable: false })
      cnpj: string
}
