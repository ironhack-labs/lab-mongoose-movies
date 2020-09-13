const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

router.get('/', (req, res, next) => {

    Movie.find()
        .then(movies => res.render('movies/index-movies', { movies }))
        .catch(err => {
            console.log('Error! ', err)
            next()
        })
})

router.get('/new', (req, res) => res.render('movies/movies-new'))
router.post('/new', (req, res) => { //falta el save method()

    const { title, genre, plot} = req.body

    Movie.create({ title, genre, plot })
        .then(() => {
            res.redirect('/movies')
        })

        .catch(err => {
            console.log('Error! ', err)
            res.redirect('/new')
        })
})

router.get('/:movies_id', (req, res, next) => {

    const id = req.params.movies_id

    Movie.findById(id)
        .then(movieDetails => res.render('movies/movies-show', movieDetails))
        .catch(err => {
            console.log('Error! ', err)
            next()
        })
})

router.post('/:movies_id/delete', (req, res, next) => {

    const id = req.params.movies_id

    Movie.findByIdAndRemove(id)
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log('Error!', err)
            next()
        })
})

router.get('/:movies_id/edit', (req, res, next) => {

    const id = req.params.movies_id

    Movie.findById(id)
        .then(movieDetails => res.render('movies/movies-edit', movieDetails))
        .catch(err => {
            console.log('Error!', err)
            next()
        })
})

router.post('/:movies_id', (req, res, next) => {

    const { title, genre, plot} = req.body

    const id = req.params.movies_id

    Movie.findByIdAndUpdate(id, { title, genre, plot})
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log('Error!', err)
            next()
        })

})


module.exports = router