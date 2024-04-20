const express = require('express')
const app = express()
const products = require('./products')
const cors = require('cors')

// const prisma = new PrismaClient()

app.use(express.json())
// app.use(cors())

app.get('/api', async (req, res) => {
	res.send('Hello world')
})

app.get('/api/products', async (req, res) => {
	res.send(products)
})

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
app.listen(port)
