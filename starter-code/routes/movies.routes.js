const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model');

// LIST MOVIES 
router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => {
            // console.log('Celebrities are: ', allMovies)
            res.render('movies/index', { allMovies})
        })    
        .catch(err => console.log(err))
})

// MOVIE DETAILS
router.get('/:id', (req, res) => {

    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log(err))
})

// ADD MOVIE
// router.get('/create', (req, res) => res.render('movies/new'))

// router.post('/create', (req, res) => {  
    
//     const { title, genre, plot } = req.body

//     Movie
//         .create({ title, genre, plot })
//         .then(() => res.redirect("/movies"))
//         .catch(err => console.log(err))
// })

// DELETE MOVIE
router.post('/:id/delete', (req, res) => {

    const movieId = req.params.id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})

// EDIT MOVIE
router.get('/:id/edit', (req, res) => {

    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(movieInfo => res.render('movies/edit', movieInfo))
        .catch(err => console.log(err))
})

router.post('/:id', (req, res) => {

    const movieId = req.params.id     
    const { title, genre, plot } = req.body     

    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})

module.exports = router