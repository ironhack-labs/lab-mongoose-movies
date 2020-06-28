const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')


//MOSTRAR LA LISTA DE LAS PELICULAS
router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(allTheMovies => res.render('movies/index', { allTheMovies }))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})

//AÑADIR UNA PELICULA

router.get('/movies/new', (req, res) => {
    res.render('movies/new')
})
//EDITAR UNA PELICULA
router.get('/movies/:id/edit', (req, res) => {
    Movie
        .findById(req.params.id)
        .then(editMovie => {
            res.render ("movies/edit", editMovie)
        })
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})
//DETALLES DE UNA PELICULA

router.post('/movies/new', (req, res) => {
    const { title, genre, plot } = req.body


    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})


//POST DE PELICULA

router.get('/movies/:id', (req, res) => {
    Movie
        .findById(req.params.id)
        .then(theMovie => res.render('movies/movie-detail', { theMovie }))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})

//DELTE MOVIE

router.post('/movies/:id/delete', (req, res) => {
    Movie
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})




//EDITAR MOVIES
router.post('/movies/:id', (req, res) => {
    const { title, genre, plot } = req.body
    Movie
        .findByIdAndUpdate(req.params.id, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
    
})


module.exports = router