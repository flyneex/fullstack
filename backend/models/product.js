const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
	{
		brand: { type: String, required: true },
		name: { type: String, required: true },
		desc: { type: String, required: true },
		price: { type: Number, required: true },
		img: { type: Object, required: true },
	},
	{
		timestamps: true,
	}
)

const Product = new mongoose.model('Product', productSchema)

module.exports = Product
