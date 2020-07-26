const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMoviesFromDB => {
            console.log('From DB:', allMoviesFromDB);
            res.render('movies/index', { allMoviesFromDB });
        })
        .catch(error => {
            console.log('Error looking for movies:', error);
        });
});
router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
});
router.post('/movies/new', (req, res, next) => {
    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot });
    newMovie.save()
        .then((movie) => {
            res.redirect('/movies');
        })
        .catch(error => {
            console.log('Error:', error);
        });

});

router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(editMovie => {
            res.render('movies/edit', { editMovie });
        })
        .catch(error => {
            console.log('Error retrieving id:', error);
        });
});
router.post('/movies/:id', (req, res, next) => {
    const { title, genre, plot } = req.body;
    Movie.update(
        { _id: req.params.id }, { $set: { title, genre, plot } }, { new: true }
    )
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => {
            console.log('Error:', error);
        });
});

router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(theMovie => {
            console.log(theMovie);
            res.render('movies/show', { theMovie });
        })
        .catch(error => {
            console.log('Error retrieving id:', error);
        });
});
router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => {
            console.log('Error:', error);
        });
});
module.exports = router;