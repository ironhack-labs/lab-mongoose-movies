const express = require('express');
const router = new express.Router();
const Movie2 = require('../models/movie2');

// All movies

router.get('/movies', (req, res, next) => {
    Movie2.find({}).then((dbResult) => {
            res.render('movies2/index.hbs', {
                allMovies: dbResult
            });
        })
        .catch((err) => {
            next();
            return err;
        });
});


// show hbs

router.get('/movies/:id', (req, res, next) => {
    Movie2.findById(req.params.id)
        .then((dbResult) => {
            res.render('movies2/show.hbs', {
                oneMovie: dbResult
            });
        })
        .catch((err) => {
            next();
            return err;
        });
});


// Adding new movies

router.get('/movies/addNewMovie', (req, res) => {
    res.render('movies2/addNewMovie.hbs');
})

router.post('/movies', (req, res) => {
    Movie2.create(req.body)
        .then((dbResult) => {
            res.redirect('/movies')
        })
        .catch((err) => {
            console.log(err);
            res.render('/movies2/addNewMovie.hbs', {
                error: 'Please fill in all the fields'
            });
        });
});


// Deleting a movie

router.get('/movies/:id/delete', (req, res, next) => {
    Movie2.findByIdAndDelete(req.params.id)
        .then((self) => {
            res.redirect('/movies');
        }).catch((err) => {
            next();
            return err;
        });
});


// Editing a movie
// 2 routes: one to display a form, one to receive the data from that form

router.get('/movies/:id/edit', (req, res, next) => {
    Movie2.findById(req.params.id)
        .then((dbResult) => {
            res.render('movies2/edit.hbs', {
                movieToBeEdited: dbResult
            });
        })
        .catch((err) => {
            next();
            return err;
        });
});

router.post('/movies/:id', (req, res, next) => {
    Movie2.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((self) => {
            res.redirect('/movies');
        })
        .catch((err) => {
            next();
            return err;
        });
})

module.exports = router;