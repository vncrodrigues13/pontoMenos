import { AppDataSource } from './data-source'
import express from 'express'
import router from './controllers/routes'
const PORT = 8080

const app = express()

app.use(express.json())

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('The server is running')
})

app.use('/', router)

AppDataSource.initialize().then(async () => {
  console.log('database connected')
}).catch(error => console.log(error))
