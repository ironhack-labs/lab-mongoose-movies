const express = require('express')
const router = express.Router()
const CelebrityModel = require('../models/Celebrity')

router.get('/', async function (req, res, next) {
	try {
		const celebrities = await CelebrityModel.find()
		res.render('celebrities/index', { celebrities })
	} catch (error) {
		next()
		console.error(error)
	}
})

router.get('/:id', async function (req, res, next) {
	try {
		const celebrity = await CelebrityModel.findById(req.params.id)
		res.render('celebrities/show', { celebrity })
	} catch (error) {
		next()
		console.error(error)
	}
})

module.exports = router