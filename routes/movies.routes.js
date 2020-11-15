const express = require('express')
const router = express.Router()

const Movie = require('./../models/movies.model')
router.get('/', (req, res) => {

    Movie
        .find()                                                                                         
        .then(allMovies => res.render('movies/index', { allMovies }))    
        .catch(err => console.log(err))
})


// Movies Show
router.get('/show/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log(err))
})
// Form new movie: render (GET)
router.get('/new', (req, res) => res.render('movies/new'))


// Form new movie: (POST)
router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

     Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))
})
// Form delete movie: (POST)
router.get('/delete', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})
// Form edit movie:  (GET)
router.get('/edit', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findById(movieId)
        .then(movieInfo => res.render('movies/edit', movieInfo))
        .catch(err => console.log(err))
})

// Form edit movie:  (POST)
router.post('/edit', (req, res) => {

    const movieId = req.query.movie_id                            

    const { title, genre, plot } = req.body    

    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(movieInfo => res.redirect('/movies'))
        .catch(err => console.log(err))
})



module.exports = router