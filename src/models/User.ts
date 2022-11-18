
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    @Generated('uuid')
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
}
