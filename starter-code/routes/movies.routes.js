const express = require('express')
const router = express.Router()
const Movie = require('../models/movie.model')

router.get('/', (req, res, next) => {
	Movie.find({})
		.then(allMovies => res.render('movies', { movies: allMovies }))
		.catch(err => console.log('Ha habido un error: ', err))
})

router.get('/create', (req, res, next) => res.render('new-movie'))
router.post('/create', (req, res, next) => {
	const { title, genre, plot } = req.body
	Movie.create({ title, genre, plot })
		.then(() => res.redirect('/movies'))
		.catch(err => console.log('There was an error: ', err))
})

router.get('/:id', (req, res, next) => {
	const movieId = req.params.id
	Movie.findById(movieId)
		.then(wholeMovie => res.render('show-movies', { movie: wholeMovie }))
		.catch(err => console.log('Ha habido un error: ', err))
})

router.post('/:id/delete', (req, res, next) => {
	const movieId = req.params.id
	Movie.findByIdAndRemove(movieId)
		.then(() => res.redirect('/movies'))
		.catch(err => console.log('Ha habido un error: ', err))
})

router.get('/:id/edit', (req, res, next) => {
	const movieId = req.params.id
	Movie.findById(movieId)
		.then(wholeMovie => res.render('edit-movie', { movie: wholeMovie }))
		.catch(err => console.log('Ha habido un error: ', err))
})
router.post('/:id/edit', (req, res, next) => {
	const movieId = req.params.id
	const { title, genre, plot } = req.body

	Movie.findByIdAndUpdate(movieId, { $set: { title, genre, plot } })
		.then(() => res.redirect('/movies'))
		.catch(err => console.log('Hubo un error: ', err))
})

module.exports = router
