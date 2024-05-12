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
			const deletedImg = await cloudinary.uploader.destroy(
				product.img.public_id
			)
			if (deletedImg) {
				const deleted = await Product.findByIdAndDelete(req.params.id)
				res.status(200).send(deleted)
			}
		} else {
			console.log('failed deleting')
		}
	} catch (err) {
		res.status(500).send(err)
	}
})

// edit product

router.put('/:id', isAdmin, async (req, res) => {
	try {
		let uploadImg
		if (req.body.img) {
			const deletedImg = await cloudinary.uploader.destroy(
				req.body.product.img.public_id
			)
			if (deletedImg) {
				uploadImg = await cloudinary.uploader.upload(req.body.img, {
					upload_preset: 'online-shop',
				})
			}
		}

		const updated = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: {
					...req.body.product,
					img: uploadImg || req.body.product.img,
				},
			},
			{ new: true }
		)
		res.status(200).send(updated)
	} catch (err) {
		res.status(500).send(err.message)
	}
})

module.exports = router
