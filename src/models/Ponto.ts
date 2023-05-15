import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import User from './User'

@Entity()
export default class Ponto {
    @PrimaryGeneratedColumn('uuid')
      id: string

    @Column({ nullable: false, type: 'timestamp' })
      time: Date

    @ManyToOne(type => User, { nullable: false })
    @JoinColumn({ name: 'userUuid', foreignKeyConstraintName: 'id' })
      user: User
}
