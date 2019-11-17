const express = require('express');
const router = express.Router();

const Movies = require('../models/Movies.models')

router.get('/', (req, res) => {
    Movies.find()
        .then(allMovies => res.render('movies/index', {
            allMovies
        }))
        .catch(err => console.log("Error consultando la BBDD: ", err))
})

router.get('/details/:id', (req, res) => {
    Movies.findById(req.params.id)
        .then(movie => res.render('movies/details', {
            movie
        }))
        .catch(err => console.log("Error consultando la BBDD", err))
})

router.get('/new', (req, res) => res.render('movies/new'))

router.post('/new', (req, res) => {
    const { title, genre, plot } = req.body
    Movies.create({ title, genre, plot })
        .then(newMovie => res.redirect('/movies'))
        .catch(err => console.log("Error consultando la BBDD", err))
})

router.get('/:id/delete', (req, res) => {
    Movies.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log("Error consultando la BBDD", err))
})

router.get('/:id/edit', (req, res) => {
    Movies.findById(req.params.id)
        .then(movie => res.render('movies/edit', movie))
        .catch(err => connsole.log("Error consultando la BBDD", err))
})

router.post('/:id/edit', (req, res) => {
    const { title, genre, plot } = req.body
    Movies.findByIdAndUpdate(req.params.id, { title, genre, plot })
        .then(() => {
            res.redirect('/movies')
        })
        .catch(err => console.log('Error consultando la BBDD', err))
})

module.exports = router;