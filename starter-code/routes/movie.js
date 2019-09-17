const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
const Celebrity = require('../models/Celebrity')

router.get('/new', (req, res, next) => {
    Celebrity.find()
        .then(response=>{
            res.render('movies/create',{allTheCelebrities:response})
        })
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    Movie.find({})
        .then(movies => {
            res.render('movies/index', { movies });
        })  
        .catch(err => next(err))
});

router.get('/details/:id', (req, res, next) => {
    Movie.findById(req.params.id).populate("celebrity")
        .then(movie => {
            console.log('GET //details', movie);
            res.render('movies/show', { movie });
        })
        .catch(err => next(err))
});

router.get('/new', (req, res, next) => {
    res.render('movies/create')
})

router.post('/', (req, res, next) => {
    Movie.create(req.body)
        .then(movie => {
            movie.save()
            res.redirect('/movies')
        })
        .catch(err => res.redirect('/movie/new'))
});

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(_ => {
            res.redirect('/movies');
        })
        .catch(err => next(err))
});

router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            Celebrity.find()
            .then(response=>{
                res.render('movies/edit', {allTheCelebrities:response, movie })
            })
            .catch(err => next(err))
        })
        .catch(err => next(err))
});

router.post('/:id', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then(_ => {
            res.redirect('/movies')
        })
        .catch(err => next(err))
});

module.exports = router;