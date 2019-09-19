const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
const Celebrity = require('../models/Celebrity')
const { userAuth } = require('../middleware/auth')

router.get('/', (req, res, next) => {
    Movie.find({}).populate('createdBy')
        .then(movies => {
            res.render('movies/index', { movies });
        })
        .catch(e => next(e))
});

router.get('/details/:id', (req, res, next) => {
    Movie.findById(req.params.id).populate('director').populate('createdBy')
        .then(movie => {
            movie.createdByMe = (req.user && req.user.role === 'Admin') ? true : movie.createdBy ? movie.createdBy.equals(req.user) : false
            res.render('movies/show', { movie });
        })
        .catch(e => next(e))
});

router.get('/new', userAuth, async(req, res, next) => {
    let directors = await Celebrity.find()
    res.render('movies/create', { directors })
})

router.post('/', (req, res, next) => {
    Movie.create({...req.body, createdBy: req.user.id })
        .then(movie => {
            movie.save()
            res.redirect('/movies')
        })
        .catch(e => res.redirect('/movie/new'))
});

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(_ => {
            res.redirect('/movies');
        })
        .catch(e => next(e))
});


router.get('/:id/edit', async(req, res, next) => {
    let directors = await Celebrity.find()
    Movie.findById(req.params.id).populate('director')
        .then(movie => {
            directors.forEach(director => {
                if (director._id.equals(movie.director._id)) director.selected = true
            })
            res.render('movies/edit', { movie, directors })
        })
        .catch(e => next(e))
});

router.post('/:id', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then(_ => {
            res.redirect('/movies')
        })
        .catch(e => next(e))
});

module.exports = router;