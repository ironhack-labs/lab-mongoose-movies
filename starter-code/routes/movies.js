const express = require('express');
const Movie = require('../models/movie');

const router  = express.Router();

router.get('/', function(req, res, next) {
    Movie.find({},(err, movies) => {
        if (err) {
            next(err);
        } else {
            res.render('movies/index',{ movies });
        }
    });
    
});

router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.get('/:id', function(req, res, next) {
    Movie.findOne({"_id" : req.params.id},(err, movie) => {
        console.log(movie);
        if (err) {
            next(err);
        } else {
            res.render('movies/show', { movie });
        }
    });   
});


router.post('/:id', function(req, res, next) {
    const updateMovie = {
        name: req.body.name,
        genre: req.body.genre,
        plot: req.body.plot,
    };

   Movie.findByIdAndUpdate(req.params.id, updateMovie, (err, movie) => {
        if (err) {
            next(err);
        } else {
            res.redirect('/movies');
        }
    });   
});


router.post('/:id/delete', (req, res, next) => {
     Movie.findByIdAndRemove({"_id" : req.params.id},(err, movie) => {
        if (err) {
            next(err);            
        } else {
             res.redirect('/movies');
        }
    });     
});


router.get('/:id/edit', (req, res, next) => {
     Movie.findOne({"_id" : req.params.id},(err, movie) => {
        if (err) {
            next(err);
        } else {
            res.render('movies/edit', { movie });
        }
    });    
});

router.post('/', (req, res, next) => {
    const movieInfo = {
        name: req.body.name,
        genre: req.body.genre,
        plot: req.body.plot,
    };

    const newMovie = new Movie( movieInfo );
    newMovie.save((err) => {
        if (err) {
            next(err);
        } else {
            res.redirect('/movies');
        }
    });

});



module.exports = router;

