import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
      userId : string

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
}
