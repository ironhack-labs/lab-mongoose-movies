const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/movies', (req, res, next) => {

    Movie.find()
    .then((movies) => {
        res.render('movies/index', {movies});
    })
    .catch((err) => {
        next();
        return err
    })
})


router.get('/movies/:id', (req, res, next) => {

    let movieId = req.params.id;
    Movie.findById(movieId)
        .then((details) => {
            res.render('movies/show', { details });
        })
        .catch((err) => {
            if (err) {
                next();
                return err
            }
        })
})

router.post('/movies/:id', (req, res, next) => {
    const { title, genre, plot } = req.body;
    
    Movie.findByIdAndUpdate(req.params.id, { title, genre, plot })
        .then(() => {
            res.redirect('/movies');
        })
        .catch((err) => {
            next();
            return err
        })

})

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})

router.post('/movies/new', (req, res, next) => {
    const { title, genre, plot } = req.body;
    let newMovie = new Movie({ title, genre, plot })

    newMovie.save()
        .then((movie) => {
            res.redirect('/movies/');
        })
        .catch((err) => {
            console.log(err);
            res.render('movies/new');
        })
})

router.post('/movies/:id/delete', (req, res, next) => {
    console.log(req.params.id);

    Movie.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/movies');
        })
        .catch((err) => {
            res.redirect('/');
            next();
            return err
        })
})

router.get('/movies/:id/edit', (req, res, next) => {

    Movie.findById(req.params.id)
        .then((movie) => {
            res.render('movies/edit', movie);
        })
        .catch((err) => {
            next();
            return err
        })
})

module.exports = router;