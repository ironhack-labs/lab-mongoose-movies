const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res, next) => {
	Celebrity.find({})
		.then(allCelebrities => res.render('celebrities', { celebrities: allCelebrities }))
		.catch(err => console.log('Ha habido un error: ', err))
})

router.get('/create', (req, res, next) => res.render('new-celebrity'))
router.post('/create', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body

	Celebrity.create({ name, occupation, catchPhrase })
		.then(() => res.redirect('/celebrities'))
		.catch(err => console.log('There was an error: ', err))
})

router.get('/:id', (req, res, next) => {
	const celebrityId = req.params.id
	Celebrity.findById(celebrityId)
		.then(wholeCelebrity => res.render('show', { celebrity: wholeCelebrity }))
		.catch(err => console.log('Ha habido un error: ', err))
})

router.post('/:id/delete', (req, res, next) => {
	const celebrityId = req.params.id
	Celebrity.findByIdAndRemove(celebrityId)
		.then(() => res.redirect('/celebrities'))
		.catch(err => console.log('Ha habido un error: ', err))
})

router.get('/:id/edit', (req, res, next) => {
	const celebrityId = req.params.id
	Celebrity.findById(celebrityId)
		.then(wholeCelebrity => res.render('edit-celebrity', { celebrity: wholeCelebrity }))
		.catch(err => console.log('Ha habido un error: ', err))
})
router.post('/:id/edit', (req, res, next) => {
	const celebrityId = req.params.id
	const { name, occupation, catchPhrase } = req.body

	Celebrity.findByIdAndUpdate(celebrityId, { $set: { name, occupation, catchPhrase } })
		.then(() => res.redirect('/celebrities'))
		.catch(err => console.log('Hubo un error: ', err))
})

module.exports = router
