import { Field, ID, ObjectType } from 'type-graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export default class User {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
      userId : string

    @Field(type => [String])
    @Column({
      nullable: false
    })
      name: string

    @Field(type => [String])
    @Column({
      nullable: false
    })
      email: string

    @Field(type => [String])
    @Column({
      nullable: true
    })
      cpf: string
}
