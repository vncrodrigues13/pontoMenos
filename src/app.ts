import { AppDataSource } from './data-source'
import { graphqlHTTP } from 'express-graphql'
import schema from './routes/schemas'
import express from 'express'
import cors from 'cors'
const PORT = 3000

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.get('/', (req, res) => {
  res.send('The server is running')
})

AppDataSource.initialize().then(async () => {
  console.log('database connected')
}).catch(error => console.log(error))
