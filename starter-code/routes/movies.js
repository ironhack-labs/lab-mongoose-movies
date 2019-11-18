const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie');

router.post('/:movieId', (req, res, next) => {
  const {movieId} = req.params;
  const {title, genre, plot} = req.body;
  console.log(title,genre,plot);
  Movie.findByIdAndUpdate(movieId, {title,genre,plot})
    .then( () => res.redirect('/movies'))
    .catch( (err) => console.error(err));
});

router.get('/:movieId/edit', (req, res, next) => {
  const {movieId} = req.params;
  Movie.findById(movieId)
    .then( (oneMovie) => res.render('./movies/edit', {oneMovie}))
    .catch( (err) => console.error(err));
});

router.post('/:movieId/delete', (req, res, next) => {
  const {movieId} = req.params;
  Movie.findByIdAndDelete(movieId)
    .then( () => res.redirect('/movies'))
    .catch( (err) => res.render(err));
});

router.post('/', (req, res, next) => {
  const {title,genre,plot} = req.body;
  const movie = new Movie({title,genre,plot});
  movie.save()
    .then( () => res.redirect('/movies'))
    .catch( () => res.redirect('/movies/new'));
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:movieId', (req, res, next) => {
  const {movieId} = req.params;
  Movie.findById(movieId)
    .then((oneMovie) => res.render('movies/show',{oneMovie}))
    .catch((err) => console.error(err));
})

router.get('/', (req,res,next) => {
  Movie.find()
    .then( (allMoviesFromDb) => res.render('movies',{allMoviesFromDb}))
    .catch( (err) => console.error(err));
});

module.exports = router;