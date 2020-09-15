const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/index', {movies}))
    .catch(err => next(err))
  ;
});

router.get('/new', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('movies/new', {celebrities})
    })
    .catch(err => next(err))
  ;
});

router.post('/', (req, res, next) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;
  const cast = req.body.cast;

  const movie = new Movie({
    title,
    genre,
    plot,
    cast
  });
  
  movie.save()
    .then(movie => {
      res.redirect('/movies');
    })
    .catch(err => {
      res.render('movies/new');
    })
  ;

});

router.get('/:id', (req, res, next) => {
  Movie.findOne({_id: req.params.id})
    .populate('cast')
    .then(movie => {
      console.log('movie=', movie);
      res.render('movies/show', {movie})
    })
    .catch(err => next(err))
  ;
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => res.redirect('/movies'))
    .catch(err => next(err))
  ;
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      Movie.findById(req.params.id)
        .populate('cast')
        .then(movie => {
          //
          // incast: true/false for each celebrity
          //
          const castIds = movie.cast.map(el => el.id);
          celebrities.forEach(celebrity => {
            if (castIds.includes(celebrity.id)) {
              celebrity.incast = true;
            }
          });

          res.render('movies/edit', {
            movie,
            celebrities
          })
        })
        .catch(err => next(err))
      ;
    })
    .catch(err => next(err))
});

router.post('/:id', (req, res, next) => {
  Movie.update({ _id: req.params.id }, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast
  })
    .then(movie => res.redirect('/movies'))
    .catch(err => next(err))
  ;
});

module.exports = router;
