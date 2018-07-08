const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")


//GET movies list page
router.get("/movies",(req, res, next) => {
  Movie
  .find().then(movies => (res.render('movies/index',{movies}))
  .catch(err => next()))
});

//GET Movies info page
router.get("/movies/:id",(req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
  .then(movie => (res.render('movies/show',{movie}))
  .catch(err => next()))
});

//GET Create new movie page
router.get("/new",(req, res, next) => {
res.render('movies/new')
});

//Create new Movie

router.post('/movies', (req, res, next) => {
  let {title, genre, plot} = req.body;

  Movie.create({title, genre, plot})
      .then(data => {
          console.log('Movie Created!')
          res.redirect('/movies');
      })
      .catch(err => next())
})

//Delete movie

router.post('/movies/:id/delete', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
      .then(data => {
          console.log('Movie Deleted!')
          res.redirect('/movies');
      })
      .catch(err => next())
})


// Edit movie

router.get("/movies/:id/edit",(req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
  .then(movie => (res.render('movies/edit',{movie}))
  .catch(err => next()))
});

router.post('/movies/:id/edit', (req, res, next) => {
  let movieId = req.params.id;
  let {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(movieId,{title, genre, plot})
      .then(data => {
          console.log('Movie Edited!')
          res.redirect('/movies');
      })
      .catch(err => next())
})

module.exports = router;
