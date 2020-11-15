const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')

//Iteration 8
router.get('/', (req, res) => {
    

    Movie
        .find()
        .then(allMoviesCreated => {
            // console.log('las celebs son:', allCelebritiesCreated)
            
            res.render('movies/index-movies', {allMoviesCreated})
        })
        .catch(err => console.log(err))
});

//Iteration 9
router.get('/details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => {
            res.render('movies/show-movies', theMovie)
        })
        .catch(err => console.log(err))
});

//Iteration 10
router.get('/new', (req, res) => res.render('movies/new-movies'))

router.post('/new', (req, res) => {
    const { title, genre, plot } = req.body
    
    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
});

//Iteration 11
router.get('/delete-movie', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
});

//Iteration 12
router.get('/edit-movie', (req, res) => {
    const movieId = req.query.movie_id

    Movie
        .findById(movieId)
        .then(movieInfo => res.render('movies/edit-movies', movieInfo))
        .catch(err => console.log(err))
    })

router.post('/edit-movie', (req, res) => {
    const movieId = req.query.movie_id

    const { title, genre, plot } = req.body
        
    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))

    })



module.exports = router