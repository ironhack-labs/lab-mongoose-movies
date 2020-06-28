const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

router.get('/list', (req, res) => {
    Movie.find()
        .then(allMovies => res.render('movies/movieslist', {allMovies}))
        .catch(err => console.log('Error al acceder list de películas: ', err))
})

router.get('/details/:movId', (req, res) => {
    Movie
        .findById(req.params.movId)
        .then(theMov => {
            res.render('movies/show', theMov)
        })
        .catch(err => console.log('Error al acceder al details de la película: ', err))
})

router.get('/new', (req, res) => {
    res.render('movies/new')
})

router.post('/create', (req, res) => {
    const {title, genre, plot} = req.body

    Movie
        .create({title, genre, plot})
        .then(() => res.redirect('/movies/list'))
        .catch(err => console.log('Error en al crear: ', err))
})

router.post('/:movId/delete', (req, res) => {
    Movie
        .findByIdAndRemove(req.params.movId)
        .then(() => res.redirect('/movies/list'))
        .catch(err => console.log('Error al borrar: ', err))
})

router.get('/:movId/edit', (req, res) => {
    Movie
        .findById(req.params.movId)
        .then(theMov => res.render('movies/edit', theMov))
        .catch(err => console.log('Error al acceder al edit de la película: ', err))
})

router.post('/edit/:movId', (req, res) => {
    const {title, genre, plot} = req.body

    Movie
        .findByIdAndUpdate(req.params.movId, {title, genre, plot}, {new: true})
        .then(() => res.redirect('/movies/list'))
        .catch(err => console.log('Error al editar: ', err))
})

module.exports = router