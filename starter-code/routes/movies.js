const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

router.get('/movies', (req, res, next) => {
  Movie.find().populate('celebrity')
    .then((allTheMovies) => {
      res.render('movies/index', {
        movies: allTheMovies
      })
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
})

router.get('/movies/new', (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebrities) => {

      res.render('movies/new', {
        celebrities: allTheCelebrities
      });
    })
    .catch((err) => {
      next(err);
    })
})

router.post('/movies/create-new-movie', (req, res, next) => {
  const {
    theTitle,
    theGenre,
    thePlot,
    theCelebrity
  } = req.body;
  let newMovie = {
    title: theTitle,
    genre: theGenre,
    plot: thePlot,
    celebrity: theCelebrity
  }

  Movie.create(newMovie)
    .then(() => {
      req.flash('success', "Successfully create a new movie")
      res.redirect('/movies')
    })
    .catch((err) => {
      next(err);
    })
})

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id).populate('celebrity')
    .then((oneSingleMovie) => {
      res.render('movies/show', {
        theMovie: oneSingleMovie
      })
    })
    .catch((err) => {
      next(err);
    })
})

router.post('/movies/:id/delete', (req, res, next) => {

  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      req.flash('success', "Successfully delete a celebrity")
      res.redirect('/movies');
    })
    .catch((err) => {
      next(err);
    })
})

router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movieFromDb) => {
      Celebrity.find()
        .then((allTheCelebrities) => {

          res.render('movies/edit', {
            movie: movieFromDb,
            celebrities: allTheCelebrities
          });
        })
        .catch((err) => {
          next(err);
        })
    })
    .catch((err) => {
      next(err);
    })
})

router.post('/movies/:id/update', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id,
  {title:req.body.title,
   genre:req.body.genre,
   plot:req.body.plot,
   celebrity: req.body.theCelebrity})
  .then(()=>{
    req.flash('success', "Successfully update a movie");
    res.redirect('/movies');
  })
  .catch((err) => {
    next(err);
  })
})


module.exports = router;