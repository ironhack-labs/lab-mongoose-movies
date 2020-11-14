const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie')

router.get('/', (req, res, next) => {

    Movie

        .find()
        .then(allMovies => res.render('movies/index', {allMovies}))
        .catch(err => console.log(err))

})

router.get('/show/:id', (req, res) => {

    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log(err))
})

router.get('/new-movie', (req, res) => res.render('movies/new-movie'))

router.post('/new-movie', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => {
            res.render('movies/new-movie')
            console.log("Error", err)
        })
})

router.get('/delete-movie', (req, res) => {

    const movieId = req.query.id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})

router.get('/edit-movie', (req, res) => {

    const movieId = req.query.id

    Movie
        .findById(movieId)
        .then(movieInfo => res.render('movies/edit-movie', movieInfo))
        .catch(err => console.log(err))
})

router.post('/edit-movie', (req, res) => {

    const movieId = req.query.id   
    
    const { title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(movieInfo => res.redirect('/movies'))
        .catch(err => console.log(err))
})



module.exports = router
