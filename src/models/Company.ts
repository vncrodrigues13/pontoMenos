import { Column, Entity, Generated, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import User from './User'

export interface CompanyModel {
  id?: string,
  name: string,
  email: string,
  cnpj: string
}

@Entity()
export default class Company {
    @PrimaryGeneratedColumn('uuid')
      id: string

    @Column({ nullable: false })
      name: string

    @Column({ nullable: false, unique: true })
      email: string

    @Column({ nullable: false, unique: true })
      cnpj: string

    @OneToMany(type => User, user => user.company) @JoinColumn()
      users: User[]
}
