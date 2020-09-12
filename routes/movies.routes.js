console.log('11. En movies.routes.js')

const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

// Endpoints

// List of all items
router.get('/', (req, res, next) => {

    Movie.find()
        .then(movies => {

            console.log(movies)
            res.render('movies/index', { movies })
        })
        .catch(error => next(error))

})

// Shows detailed view of an item (READ)
router.get('/:id', (req, res, next) => {

    Movie.findById(req.params.id)
        .then(matchedMovie => {

            res.render('movies/show', matchedMovie)

        })
        .catch(error => next())

})

// Shows the view for creating a new item
router.get('/new', (req, res) => {

    res.render('movies/new')

})

// Creates new item into the DB (CREATE)
router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(error => res.render('movies/show', error))

})

// Deletes an item from the database (DELETE)
router.post('/delete', (req, res) => {

    Movie.findByIdAndRemove(req.body.id)
        .then(Movie.find())
        .then(res.redirect('/movies'))
        .catch(error => res.send(error))

})

// Shows the view for editing
router.get('/edit/:id', (req, res) => {

    Movie.findById(req.params.id)
        .then(matchedMovie => {

            res.render('movies/edit', matchedMovie)

        })
        .catch(error => next())

})

// Updates the item data and shows it's detailed view (UPDATE)
router.post('/edit/:id', (req, res) => {

    const movie_id = req.params.id

    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(movie_id, { title, genre, plot })
        .then(() => res.redirect(`/movies/${movie_id}`))
        .catch(error => res.render('movies/edit', error))

})


module.exports = router
