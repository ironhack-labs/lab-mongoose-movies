const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')

// Endpoints
router.get('/', (req, res, next) => {

    Movie
        .find()
        .then(allMovies => res.render('movies/index', {allMovies}))
        .catch(err => console.log("Ha habido un error!", err))

})

router.get('/new', (req, res, next) => res.render('movies/new'))
router.post('/new', (req, res, next) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/'))
        .catch(err => console.log("Hubo un error", err))
})


router.get('/:id', (req, res, next) => {
    
    Movie
        .findById(req.params.id)
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log("Ha habido un error!", err))
})

router.post('/:id/delete', (req, res, next) => {

    Movie
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => console.log("Ha habido un error!", err))
})

router.get('/:id/edit', (req, res) => {

    Movie
        .findById(req.params.id)
        .then(movieFound => res.render('movies/edit', movieFound))
        .catch(err => console.log("Ha habido un error!", err))
})

router.post('/:id', (req, res) => {

    console.log(req.body)

    const { title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(req.params.id, { title, genre, plot }, {new:true})
        .then(() => res.redirect('/'))
        .catch(err => console.log("Ha habido un error!", err))
})

module.exports = router