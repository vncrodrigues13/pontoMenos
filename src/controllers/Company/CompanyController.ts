import { Router } from 'express'

const companyRouter = Router()


companyRouter.get('/', async(req,res) => {
	res.send('hello world')
})


export default companyRouter
