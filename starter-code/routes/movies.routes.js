//ITERATION 8
const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')

router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .then(allTheMovies=> res.render('../views/movies/indexito.hbs', {allTheMovies}))
        .catch(err => console.log("Error en la BBDD", err))
})

//ITERATION 9
router.get('/movies/:id', (req, res, next) => {

    Movie
        .findById(req.params.id)
        .then(theMovie => res.render('../views/movies/showito.hbs', {theMovie}))
        .catch(err => console.log("Error en la BBDD", err))
})


//ITERACION 10
router.get('/newito', (req, res) => {res.render('movies/newito')})

router.post('/newito', (req, res) => {

    const {title, genre, plot } = req.body

    Movie
        .create({title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => {console.log("Error en la BBDD", err)
            res.redirect('/new')
            next()
        })
})

//ITERATION 11
router.post('/movies/:id/delete', (req, res) => {

    Movie
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect(`/movies`))
    .catch(err => console.log('Error en la BBDD', err))
    next()
})





module.exports = router