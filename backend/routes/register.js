const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Joi = require('joi')
const User = require('../models/user')
const genAuthToken = require('../utils/genAuthToken')

router.post('/', async (req, res) => {
	const schema = Joi.object({
		name: Joi.string().min(3).max(100).required(),
		email: Joi.string().min(3).max(100).required().email(),
		password: Joi.string().min(3).max(250).required(),
	})

	const { error } = schema.validate(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	let user = await User.findOne({ email: req.body.email })
	if (user) return res.status(400).send('User exist already')

	const { name, email, password } = req.body
	user = new User({
		name,
		email,
		password,
	})

	const salt = await bcrypt.genSalt(10)
	user.password = await bcrypt.hash(user.password, salt)

	user = await user.save()
	const token = genAuthToken(user)

	res.send(token)
})

module.exports = router
