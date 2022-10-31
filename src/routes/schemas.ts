import { buildSchema } from 'type-graphql'
import UserResolver from './UserResolver/UserResolver'

const schema = await buildSchema({
  resolvers: [UserResolver]
})

export default schema
