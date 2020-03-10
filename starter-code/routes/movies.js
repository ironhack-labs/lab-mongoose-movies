const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/movies', { movies });
    })
    .catch(next);
});

router.get('/new-movie', (req, res, next) => {
    res.render('movies/new-movie');
});

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movies/movie-details', {movie});
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    const {title, genre, plot, cast} = req.body;
    Movie.create({
        title, genre, plot, cast
    })

    .then(() => {
        res.redirect('/movies');
    })
    .catch(next);
});

router.post('/:id/delete', (req, res, next) => {
    const {id} = req.params;
    Movie.findByIdAndDelete(id)
    .then(() => {
        res.redirect('/movies');
    })
    .catch(next);
});

router.get('/:id/edit', (req, res, next) => {
     Movie.findById (req.params.id)
    .then(movie => {
        res.render('movies/edit-movie', {movie});
    })
    .catch(next);
});

router.post ('/:id', (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
    const { id} = req.params;

    Movie.update({_id : id},
         {$set: {title, genre, plot, cast}})
         .then(() => {
             res.redirect('/movies');
         })
         .catch(next)
});


module.exports = router;
