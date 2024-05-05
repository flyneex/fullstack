const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const register = require('./routes/register')
const login = require('./routes/login')
// const prisma = new PrismaClient()
const products = require('./products')
const productsV2 = require('./routes/products')

app.use(express.json())
app.use(cors())
app.use('/api/register', register)
app.use('/api/login', login)
app.use('/api/products', productsV2)

app.get('/', async (req, res) => {
	res.send('Hello world')
})

// app.get('/api/products', async (req, res) => {
// 	res.send(products)
// })

require('dotenv').config()

// app.post('/api', async (req, res) => {
// 	const { name, email } = req.body

// 	if (!name || !email) {
// 		return res.status(400).json({ message: 'Status error' })
// 	}

// 	try {
// 		const addData = await prisma.whitelist.create({
// 			data: {
// 				name,
// 				email,
// 			},
// 		})

// 		res.json(addData)
// 	} catch (error) {
// 		res.status(400).send({ message: error })
// 	}
// })

const port = process.env.port || 8080
const db = process.env.MongoDB_url

app.listen(port)

mongoose
	.connect(db)
	.then(() => console.log('MongoDB was connected...'))
	.catch(err => console.log(err.message))
