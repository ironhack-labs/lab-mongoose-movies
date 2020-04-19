const express = require('express')
const router = express.Router()

const Movie = require('../models/movieModel')

// Sacar la lista de nombres de las peliculas

router.get('/', (req, res, next) => {

    Movie.find(req.body)
        .then(allMovies => res.render('movies/movies', { allMovies }))
        .catch(err => console.log(err))

})

//Crear nuevas peliculas
router.get('/create', (req, res, next) => res.render('movies/create'))
router.post('/create', (req, res, next) => {

    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))

})

// Editar las peliculas
router.get('/edit/:id', (req, res, next) => {

    Movie.findById(req.params.id)
        .then(theMovieEdit => res.render('movies/edit', theMovieEdit))
        .catch(err => console.log(err))

})

router.post('/edit/:id', (req, res, next) => {

    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
        .then(theUpdatedMovie => res.redirect(`/movies`))
        .catch(err => console.log(err))
})

// Eliminar las peliculas

router.post('/:id/delete', (req, res, next) => {

    const { title, genre, plot } = req.body

    Movie.findByIdAndRemove(req.params.id, { title, genre, plot })
        .then(deleted => res.redirect('/movies'))
        .catch(err => console.log(err))

})





// Ver detalles de a pelicula
router.get('/:id', (req, res, next) => {

    Movie.findById(req.params.id)
        .then(theMovie => res.render('movies/movie-detail', theMovie))
        .catch(err => console.log(err))

})






module.exports = router;