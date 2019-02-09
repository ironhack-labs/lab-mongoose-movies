
let router = require('express').Router()
let Movie = require('../models/Movie')


router.post('/:id/edit', (req, res, next) => {
    const { id } = req.params
    Movie.findByIdAndUpdate(id.req.body)
        .then(movies => res.redirect('/movies/' + req.params.id))
        .catch(e => next(e))
})

router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movies => res.render('movies/edit', movies))
        .catch(e => next(e))
})

router.post("/:id/delete", (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(movies => {
            res.redirect('/movies')
        })
        .catch(e => next(e))
})

router.post("/new", (req, res, next) => {
    Movie.create(req.body)
        .then(movies => {
            res.redirect('/movies')
        })
        .catch(e => next(e))
})

router.get('/new', (req, res, next) => {
    res.render('movies/new')
})

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movies => res.render('movies/show', movies))
        .catch(e => next(e))
})

router.get("/", (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => next(err))
})


module.exports = router