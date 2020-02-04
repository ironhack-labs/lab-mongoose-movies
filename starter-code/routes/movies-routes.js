const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')

router.post('/movies/new', (req, res, next) => {
  Movie.create(req.body)
  .then(() => {
    res.redirect('/movies');
  })
  .catch(err => console.log(err))
});

router.get('/movies/new', (req, res, next) => {
  Celebrity.find()
    .then( availableCelebrities => {
      res.render('movies/new.hbs', {celebrities :availableCelebrities})
    })
    .catch(error => console.log(error))  
  });

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .populate('cast')
  .then(detailMovie => {
    res.render('movies/show', {movie: detailMovie});
  })
  .catch(err => console.log(err))
});

router.post('/movies/:id', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, {$set: req.body})
  .then(movie => {
    res.redirect('/movies');
  })
  .catch(err => console.log(err))
});

router.post('/movies/:id/delete', (req, res, next) => {

  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      res.redirect('/movies');
    })
    .catch(err => console.log(err));
});

router.get('/movies/:id/edit', (req, res, next) => {

  Movie.findById(req.params.id)
  .populate('cast')
  .then(movie => {
    Celebrity.find()
      .then( availableCelebrities => {
        const newAvailableCelebrities =  availableCelebrities.filter(
          oneCelebrity => {
            const castArr = movie.cast
            for (let i = 0; i < castArr.length; i++) {
              if (oneCelebrity._id.equals(movie.cast[i]._id)){
                return false
              }
            }
            return true
          })
        res.render("movies/edit", {movie, newAvailableCelebrities})
      })
      .catch(error => console.log(error))
  })
  .catch((error) => {
    console.log(error);
  })

});


router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(allMovies => {
    res.render('movies/index', {movies: allMovies});
  })
  .catch(err => console.log(err))
});



module.exports = router;
