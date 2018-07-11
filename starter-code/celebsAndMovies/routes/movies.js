const express = require('express');
const movieRouter  = express.Router();

const ensureLogin     = require("connect-ensure-login");

const Movie = require('../models/movie');


// movieRouter.use((req, res, next) => {
//   if (req.session.currentUser) {
//     next();
//   } else {
//     res.redirect("/authRoutes/login");
//   }
// });

//READ: GET MOVIES FROM DATABASE AND DISPLAY
movieRouter.get('/movies/index', ensureLogin.ensureLoggedIn("/authRoutes/login"), (req, res, next) => {
  Movie.find()
    .then((theMovies) => {
      res.render('movies/index', { theMovies });
    })
    .catch((err) => {
      next(err);
    })
});


//CREATE: RENDER FORM TO FILL AND CREATE MOVIE
movieRouter.get('/movies/new', (req, res, next) => {
  res.render('movies/new-movie');
});


//CREATE: SEND FILLED FORM WITH DATA(req.body) AND SAVE IN DATABASE
movieRouter.post('/movies/create', (req, res, next) => {
  const newMovie = new Movie(req.body);
  newMovie.save()
  .then((response) => {
    res.redirect('/movies/index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});


//UPDATE: RENDER FORM PREFILLED AND EDIT IN DATABASE
movieRouter.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((theMovie) => {
    res.render('movies/edit-movie', theMovie);
  })
  .catch((err) => {
    next(err);
  })
});


//UPDATE: SEND THE NEW INFO TO DATABASE TO UPDATE
movieRouter.post('/movies/:id/update', (req, res, next) => {
  Movie.findOneAndUpdate({_id : req.params.id},req.body)
  .then((response) => {
    res.redirect('/movies/index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});


//DELETE
movieRouter.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then((response) => {
    res.redirect('/movies/index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});


//READ: SHOW AN SPECIFIC MOVIE
movieRouter.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((theMovie) => {
    res.render('movies/show', {theMovie: theMovie});
  })
  .catch((err) => {
    next(err);
  })
});


module.exports = movieRouter;