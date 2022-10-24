import 'reflect-metadata'
import { DataSource } from 'typeorm'
import User from './entity/User'
import Company from './entity/Company'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'asd',
  database: 'ponto_menos',
  synchronize: true,
  logging: false,
  entities: [User, Company],
  migrations: [],
  subscribers: []
})
