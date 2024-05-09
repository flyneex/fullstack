const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
	const token = req.header('x-auth-token')

	if (!token) return res.status(401).send('Not Autorization')

	try {
		const secretKey = process.env.JWT_SECRET_KEY
		const user = jwt.verify(token, secretKey)

		req.user = user

		next()
	} catch (err) {
		res.status(400).send('Something wrong with admin token')
	}
}

const isAdmin = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.isAdmin) {
			next()
		} else {
			res.status(403).send('Access forbidden')
		}
	})
}

module.exports = { auth, isAdmin }
