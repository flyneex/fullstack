const express = require('express')
const Product = require('../models/product')
const cloudinary = require('../utils/cloudinary')
const { isAdmin } = require('../middleware/auth')

const router = express.Router()

// create

router.post('/', isAdmin, async (req, res) => {
	const { name, brand, desc, price, img } = req.body
	try {
		if (img) {
			const uploadImg = await cloudinary.uploader.upload(img, {
				upload_preset: 'online-shop',
			})
			if (uploadImg) {
				const product = new Product({
					name,
					brand,
					desc,
					price,
					img: uploadImg,
				})
				const saveProduct = await product.save()
				res.status(200).send(saveProduct)
			}
		}
	} catch (err) {
		res.status(500).send(err)
	}
})

// get all products

router.get('/', async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).send(products)
	} catch (err) {
		res.status(500).send(err)
	}
})

// get product

router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		res.status(200).send(product)
	} catch (err) {
		res.status(500).send(err)
	}
})

// delete product

router.delete('/:id', isAdmin, async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		if (!product) return res.status(404).send('Product not found')

		if (product.img.public_id) {
			const deletedImg = cloudinary.uploader.destroy(product.img.public_id)
		}
		if (deletedImg) {
			const deleted = await Product.findByIdAndDelete(req.params.id)
		}
		res.status(200).send(deleted)
	} catch (err) {
		res.status(500).send(err)
	}
})

// edit product

router.put('/:id', isAdmin, async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		// to do
	} catch (err) {
		res.status(500).send(err)
	}
})

module.exports = router
