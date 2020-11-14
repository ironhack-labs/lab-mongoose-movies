const express = require('express');
const CelebrityModel = require('../models/Celebrity.model');
const MovieModel = require('../models/Movie.model');

// require the Celebrity model here
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Celebrity.find().then((celebritiesFromDB) => {
        console.log(celebritiesFromDB)
        res.render('celebrities/index', { allTheCelebrities: celebritiesFromDB })
    })
});

router.get('/new', (req, res, next) => {

    // give the possibility to add a movie while creating new celebrity
    Movie.find().then((moviesFromDB) => {
      res.render('celebrities/new', { allTheMovies: moviesFromDB });
    });
  });
  

router.get('/:id', (req, response, next) => {

    Celebrity.findById(req.params.id)
      .populate('movies')
      .then((celebrity) => {
        response.render('celebrities/show', celebrity);
      });
  
  });

router.post('/new', (req, res, next) => {

    console.log(req.body);
    Celebrity.create({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase, movies: [req.body.movie] })
      // in the line above we are adding one movie ID to an array of movie's IDs to celebrity object
      // movies: [req.body.movie]
      // movies > property name (which is an array) in Celebrity model
      // movie > name of the select field in the form celebrities/new
      .then(dbCelebrity => {
        return Movie.findByIdAndUpdate(req.body.movie, { $push: { celebrities: dbCelebrity._id } })
        // in the line above we are updating movie object (adding celebrity's ID to an array of elebrities)
      })
      .then(() => {
        res.redirect('/celebrities');
      });
  });


router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/celebrities')
    })
});


module.exports = router;

