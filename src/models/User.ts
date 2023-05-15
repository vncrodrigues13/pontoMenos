
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Company from './Company'

@Entity()
export default class User {
    @PrimaryGeneratedColumn('uuid')
      id : string

    @Column({
      nullable: false
    })
      name: string

    @Column({
      nullable: false
    })
      email: string

    @Column({
      nullable: true
    })
      cpf: string

    @Column({
      default: 'true'
    })
      active: boolean

    @ManyToOne(type => Company) @JoinColumn()
      company: Company
}
