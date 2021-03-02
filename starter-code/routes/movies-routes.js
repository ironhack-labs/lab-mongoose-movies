const express = require('express');
const router  = express.Router();

//movies
const MovieModel = require('./../models/moviesModel');
//celebrities
const CelebrityModel = require('./../models/celebritiesModel');
const { route } = require('.');

//MOVIES HOME GET
router.get('/', (req, res, next) => {
    MovieModel.find().populate('cast')
    .then(dbSuccess => {
        res.render('movies/movies', {movies : dbSuccess});
    })
    .catch(err => next(err));
});

//MOVIE BY ID
router.get('/movie/:id', (req, res, next) => {
    MovieModel.findById(req.params.id).populate('cast')
    .then(dbSuccess => {    
        res.render('movies/movie-details', {movie : dbSuccess});
    })
    .catch(err => next(err));
})

// DELETE GET
router.get('/movie/:id/delete', (req, res, next) => {
    MovieModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => next(err));
})  

//CREATE GET
router.get('/new', (req, res, next) => {
    CelebrityModel.find()
    .then(dbSuccess => {
        res.render('movies/new-movies', {celebrities : dbSuccess})
    })
    .catch(err => next(err));
});

// CREATE POST
router.post('/create', async (req, res, next) => {
    MovieModel.create(req.body)
    .then(() => res.redirect('/movies'))
    .catch(res.render('celebrities/new-celebrity'))
});

//EDIT GET
router.get('/movie/:id/edit', (req, res, next) => {
    MovieModel.findById(req.params.id).populate('cast')
    .then(dbSuccess => {
        CelebrityModel.find()
        .then(celebritySuccess => {
            res.render('movies/edit-movie', {movie : dbSuccess, celebrities : celebritySuccess});
        })
    })
    .catch(err => next(err));
})

//EDIT POST
router.post('/movie/:id/update', (req, res, next) => {
    MovieModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/movies'))
    .catch(err => next(err));
})


module.exports = router;