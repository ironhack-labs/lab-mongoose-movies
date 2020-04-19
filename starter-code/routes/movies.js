const express = require("express")
const router = express.Router()

const Movie = require("../models/movies")

// GET Home Page

router.get("/", (req, res, next) => {

	Movie.find()
		.then(allMovies => res.render('movies/index', { allMovies }))
		.catch(error => {
			next()
			return error
		})
})

// GET Create Movie
router.get('/new', (req, res, next) => res.render('movies/new'))

// POST Create Movie
router.post('/new', (req, res, next) => {

	const { title, genre, plot } = req.body
	Movie.create({ title, genre, plot })
		.then(res.redirect('/movies'))
		.catch(error => {
			next()
			return error
		})
})

// POST Delete Movie
router.post('/:id/delete', (req, res, next) => {

	Movie.findByIdAndRemove(req.params.id)
		.then(res.redirect('/movies'))
		.catch(error => {
			next()
			return error
		})
})

// GET Edit Movie
router.get('/:id/edit', (req, res, next) => {


	Movie.findById(req.params.id)
		.then(foundMovie => res.render('movies/edit', foundMovie))
		.catch(error => {
			next()
			return error
		})
	
})

// POST Edit Movie

router.post('/:id/edit', (req, res, next) => {

	const {title, genre, plot} = req.body

	Movie.findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
		.then(res.redirect('/movies'))
		.catch(error => {
			next()
			return error
		})
})


// GET Details Page

router.get('/:id', (req, res, next) => {

	Movie.findById(req.params.id)
		.then(movie => res.render('movies/show', movie))
		.catch(error => {
			next()
			return error
		})
})


module.exports = router