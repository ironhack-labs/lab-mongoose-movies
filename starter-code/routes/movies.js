const express = require('express');
const router = express.Router();
const Movie = require("../models/movie");

// Read
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((dbResponse) => {
            res.render(('movies/index.hbs'), {
                movies: dbResponse,
                styles: ['gallery.css']
            })
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        })
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((dbResponse) => {
            res.render(('movies/show.hbs'), {
                movie: dbResponse,
                styles: ['view.css']
            })
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

// Create
router.get('/movies/new', (req, res, next) => {
    res.render('movies/new.hbs', {
        styles: ['form.css']
    });
})

router.post('/movies', (req, res, next) => {
    Movie.create(req.body)
        .then((dbResult) => {
            res.redirect('/movies')
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

// Delete
router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then((dbResponse) => {
            res.redirect('/movies');
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

// Update
router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((dbResponse) => {
            res.render('movies/edit.hbs', {
                movie: dbResponse,
                styles: ["form.css"]
            });
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

router.post('/movies/:id/edit', (req, res, next) => {
    const updatedMovie = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    };
    Movie.findByIdAndUpdate(req.params.id, updatedMovie, {
            new: true
        })
        .then((dbResponse) => {
            res.redirect('/movies');
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

module.exports = router;