const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js');

/* GET movies page */
router.get('/', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            res.render('movies/index', {
                movies: allMovies
            });
        }).catch(error => {
            next(error);
        });
});

/*POST movie*/
router.post('/', (req, res, next) => {
    const {
        title,
        genre,
        plot
    } = req.body;
    const newMovie = new Movie({
        title,
        genre,
        plot
    });
    newMovie.save()
        .then((celebrity) => {
            res.redirect('/movies');
        })
        .catch((error) => {
            res.redirect('/new');
        });
});

/*GET movies add details page*/
router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

/*POST update movie*/
router.post("/:id", (req, res, next) => {
    const updateFields = {
        title,
        genre,
        plot
    } = req.body;
    Movie.update({
            _id: req.params.id
        }, updateFields)
        .then((movie) => {
            res.redirect('/movies');
        })
        .catch((error) => {
            next(error);
        });
});

/*POST delete movie*/
router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then((movie) => {
            res.redirect('/movies');
        })
        .catch((error) => {
            next(error);
        });
});

/*GET movies edit details page*/
router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(theMovie => {
            res.render('movies/edit', {
                theMovie
            });
        }).catch(error => {
            next(error);
        });
});


/*GET movies details page*/
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(theMovie => {
            res.render('movies/show', {
                theMovie
            });
        }).catch(error => {
            next(error);
        });
});

module.exports = router;