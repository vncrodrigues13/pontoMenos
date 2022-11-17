import 'reflect-metadata'
import { DataSource } from 'typeorm'
import User from './models/User'
import Company from './models/Company'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'asd',
  database: 'ponto_menos',
  synchronize: true,
  logging: false,
  entities: [User, Company],
  migrations: [],
  subscribers: []
})
