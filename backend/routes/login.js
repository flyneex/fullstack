const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Joi = require('joi')
const User = require('../models/user')
const genAuthToken = require('../utils/genAuthToken')

router.post('/', async (req, res) => {
	const schema = Joi.object({
		email: Joi.string().min(3).max(100).required().email(),
		password: Joi.string().min(3).max(250).required(),
	})

	const { error } = schema.validate(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	let user = await User.findOne({ email: req.body.email })
	if (!user) return res.status(400).send('Email not valid')

	let isValid = await bcrypt.compare(req.body.password, user.password)
	if (!isValid) return res.status(400).send('Password not valid')

	const token = genAuthToken(user)
	res.send(token)
})

module.exports = router
