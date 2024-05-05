const { default: mongoose } = require('mongoose')

const productSchema = new mongoose.Schema(
	{
		brand: { type: String, required: true },
		name: { type: String, required: true },
		desc: { type: String, required: true },
		price: { type: String, required: true },
		img: { type: Object, required: true },
	},
	{
		timestamps: true,
	}
)

const product = new mongoose.model('product', productSchema)

module.exports = product
