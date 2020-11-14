const express = require('express');
const MovieModel = require('../models/Movie.model');
const CelebrityModel = require('../models/Celebrity.model');

// require the Movie model here
const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Movie.find().then((moviesFromDB) => {
        console.log(moviesFromDB)
        res.render('movies/all-movies', { allTheMovies: moviesFromDB })
    })
});

router.get('/new', (req, res, next) => {

    // give the possibility to add a celebrity while creating new movie
    Celebrity.find().then((celebritiesFromDB) => {
      res.render('movies/new', { allTheCelebrities: celebritiesFromDB });
    });
  
  });

router.post('/new', (req, res, next) => {

    console.log(req.body);
    Movie.create({ title: req.body.title, genre: req.body.genre, plot: req.body.plot, celebrities: [req.body.celebrity] })
      .then(dbMovie => {
        return Celebrity.findByIdAndUpdate(req.body.celebrity, { $push: { movies: dbMovie._id } });
      })
      .then(() => {
        res.redirect('/movies')
      });
  });

  router.get('/:id', (req, response, next) => {

    Movie.findById(req.params.id)
      .populate('celebrities')
      .then((movie) => {
        response.render('movies/show', movie);
      });
  
  });

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/movies')
    })
});

module.exports = router;