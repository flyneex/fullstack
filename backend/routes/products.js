const express = require('express')

const router = express.Router()

router.post('/', async (req, res) => {
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
				req.statusCode(200).send(saveProduct)
			}
		}
	} catch (err) {
		res.status(500).send(err)
	}
})

router.get('/', async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).send(products)
	} catch (err) {
		res.status(500).send(err)
	}
})

module.exports = router
