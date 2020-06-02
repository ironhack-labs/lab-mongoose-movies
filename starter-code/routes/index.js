const express = require('express');
const router  = express.Router();
const Celeb = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/new', (req, res, next) => res.render('celebrity-new'));

router.get('/movies/new', (req, res, next) => res.render('movie-new'));

router.post('/celebrities/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCeleb = new Celeb({name, occupation, catchPhrase})
  newCeleb.save()
  .then(() => res.redirect("/celebrities"))
  .catch(e => console.log(`Error when creating the celebrity: ${e}`))
});

router.post('/movies/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot})
  newMovie.save()
  .then(() => res.redirect("/movies"))
  .catch(e => console.log(`Error when creating the movie: ${e}`))
});

router.get("/celebrities", (req, res, next) => {
  Celeb.find()
  .then(celeb => res.render('celebrities', { celeb }))
  .catch(error => console.log('Error while getting the celebrities from the DB: ', error))
});

router.get("/movies", (req, res, next) => {
  Movie.find()
  .then(movie => res.render('movies', { movie }))
  .catch(error => console.log('Error while getting the movies from the DB: ', error))
});

router.get('/celebrities/edit', (req, res, next) => {
  Celeb.findOne({_id: req.query.celebrities_id})
  .then(celeb => res.render("celebrity-edit", {celeb}))
  .catch(e => console.log(`Error while trying to edit the celebrity: ${e}`))
});

router.post('/celebrities/edit', (req, res, next) => {
  Celeb.findByIdAndUpdate(req.body._id, req.body)
  .then(() => res.redirect('/celebrities'))
  .catch(e => console.log(`Error while editing the celebrity: ${e}`))
});

router.get('/movies/edit', (req, res, next) => {
  Movie.findOne({_id: req.query.movie_id})
  .then(movie => res.render("movie-edit", {movie}))
  .catch(e => console.log(`Error while trying to edit the movie: ${e}`))
});

router.post('/movies/edit', (req, res, next) => {
  Movie.findByIdAndUpdate(req.body._id, req.body)
  .then(() => res.redirect('/movies'))
  .catch(e => console.log(`Error while editing the movie: ${e}`))
});

router.get('/celebrities/:celebId', (req, res, next) => {
  Celeb.findById(req.params.celebId)
    .then(celeb => {
      res.render('celebrity-info', { celeb });
    })
.catch(e => console.log(`Error while retrieving the celebrity's info: ${e}`))
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then(movie => res.render('movie-info', { movie }))
  .catch(e => console.log(`Error while retrieving the celebrity's info: ${e}`))
});

router.get("/delete", (req, res, next) => {
  Celeb.findByIdAndDelete(req.query._id)
  .then(() => res.redirect("/"))
  .catch(e => console.log(`Error when trying to delete a celebrity: ${e}`))

  Movie.findByIdAndDelete(req.query._id)
  .then(() => res.redirect("/"))
  .catch(e => console.log(`Error when trying to delete a movie: ${e}`))
})

module.exports = router;
