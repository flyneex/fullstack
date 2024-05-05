const { mongoose } = require('mongoose')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 100,
	},
	email: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 100,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 250,
	},
})

const User = new mongoose.model('user', userSchema)

module.exports = User
