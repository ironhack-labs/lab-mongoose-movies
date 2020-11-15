const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')


//Iteration #8: Listing Our Movies
router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies/index', { allMovies }))
        .catch(err => console.log(err))

})


//Iteration #9: The Movie Details Page
router.get('/show/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log(err))

})


//Iteration #10: Adding New Movies
// render (GET)
router.get('/new', (req, res) => res.render('movies/new'))


//create new (POST)
router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))

})



//Iteration #11: Deleting Movies
router.post('/delete/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))

})


//Iteration #12 (Bonus): Editing Movies
// render (GET)
router.get('/edit/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/edit', theMovie))
        .catch(err => console.log(err))

})

//edit (POST)
router.post('/edit/:movie_id', (req, res) => {
    const movieId = req.params.movie_id
    const { title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))

})


module.exports = router