const express = require('express');
const router = express.Router();
const Movies = require('../models/movie');

router.get('/', (req, res, next) => {
   Movies.find()
    .then(movies => {
        res.render('movies/index', {movies});
    })
    .catch(err => {
        console.log('Movies can only be watched on film: ', err);
        next();
    });
});

router.get('/:id', (req, res, next) => {
    Movies.findOne({_id: req.params.id})
        .then(movie => {
            res.render('movies/show', {movie});
        })
        .catch(err => {
            console.log('This movie has limited rights and legal limitations: ', err);
            next();
        });
});

router.get('/add', (req, res, next) => {
    res.render('movies/new');
});

router.post('/', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newMovie = new Movies({title, genre, plot})
    newMovie.save()
        .then(movie => {
            res.redirect('/movies');
        })
        .catch(err => {
            console.log('we\'ve got errors in da house: ', err);
        });
});

router.get('/:id/edit', (req, res, next) => {
    Movies.findOne({_id: req.params.id})
        .then(movie => {
            res.render('movies/edit', {movie});
        })
        .catch(err => {
            console.log('The movie already happpened, what is there to edit??: ', err);
        });
});

router.post('/:id', (req, res, next) => {
    const {title, genre, plot} = req.body;
    Movies.findByIdAndUpdate({_id: req.params.id}, {title, genre, plot})
        .then(movie => {
            res.redirect(movie._id);
        })
        .catch(err => {
            console.log('Don\'t you want me error?? Don\'t you want me oooohhh');
        });
});

router.get('/:id/delete', (req, res, next) => {
    Movies.findByIdAndRemove({_id: req.params.id})
        .then(movie => {
            res.redirect('/movies');
        })
        .catch(err => {
            console.log('You THINK you\'ve finally finished the assignment but I came to save the day: ', err);
        });
});

module.exports = router;