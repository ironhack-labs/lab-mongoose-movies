const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie')


router.get('/', (req, res) => {

    Movie.find()
        .then(allMovies => res.render('movies/index', { allMovies }))
        .catch(err => console.log("Error in finding movie", err))
})


router.get('/new', (req, res) => res.render("movies/new"))

router.post('/new', (req, res) => {
    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
        .then(newMovie => {
            console.log("Movie created", newMovie)
            res.redirect('/movies')
        })
        .catch(err => console.log("Error creating movie", err))
})






router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(oneMovie => res.render('movies/show', oneMovie))
        .catch(err => console.log("Error showing movie", err))

})

router.post('/:id/delete', (req, res) => {

    Movie
        .findByIdAndRemove(req.params.id)
        .then(res.redirect('/movies'))
        .catch(err => console.log("Error deleting movie", err))

})



router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(editedMovie => res.render('movies/edit', editedMovie))
        .catch(err => console.log("Error editing movie", err))
})

router.post('/movies/:id', (req, res) => {
    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
        .then(() => res.redirect('/movies')
            .catch(err => console.log("Error updating movie", err)))
})


module.exports = router