const express = require('express')
const router = express.Router()

const Movies = require('./../models/movie.model')

// Endpoints

//MOVIES LIST

router.get('/', (req, res) => {

  Movies
    .find()
    .then(allMovies => res.render('movies/movies', { allMovies }))
    .catch(err => console.log(err))
})


//MOVIES DETAILS

router.get('/show/:movies_id', (req, res) => {

  const moviesID = req.params.movies_id

  Movies
    .findById(moviesID)
    .then(theMovie => res.render('movies/show', theMovie))
    .catch(err => console.log(err))

})


// ADD MOVIES

router.get('/new-movies', (req, res) => res.render('movies/new-movies'))

router.post('/new-movies', (req, res) => {

  const { title, genre, plot } = req.body

  Movies
    .create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('Error:', err))
})

//DELETE MOVIE


router.get('/delete-movies', (req, res) => res.render('movies/delete-movies'))


router.get('/delete', (req, res) => {

  const moviesID = req.query.movies_id

  Movies
    .findByIdAndDelete(moviesID)
    .then(() => res.redirect('/movies/delete-movies'))
    .catch(err => console.log(err))
})


//EDIT MOVIES

router.get('/edit-movies/:movies_id', (req, res) => {

  const moviesID = req.params.movies_id

  Movies
    .findById(moviesID)
    .then(theMovie => res.render('movies/edit-movies', theMovie))
    .catch(err => console.log(err))

})

router.post('/edit-movies', (req, res) => {

  const moviesID = req.query.movies_id

  const { title, genre, plot } = req.body

  Movies
    .findByIdAndUpdate(moviesID, { title, genre, plot })
    .then(theMovie => res.redirect('/movies'))
    .catch(err => console.log(err))
})






module.exports = router
