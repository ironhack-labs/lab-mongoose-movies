const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET list page */
router.get('/', (req, res, next) => {
  Movie.find()
    .then(moviesFromDB => {
      console.log(moviesFromDB);
      res.render('movies/index', {movies: moviesFromDB});
    }).catch(err => console.log(`Error finding all movies: ${err}`))  
});

/* GET details page */
router.get('/details/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieFromDB => {
      console.log(movieFromDB);
      res.render('movies/show', {movie: movieFromDB});
    }).catch(err => console.log(`Error finding movie by ID: ${err}`))
})

/*GET update movie info*/
router.get('/details/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieFromDB => {
      console.log(movieFromDB);
      res.render('movies/edit.hbs', {movie: movieFromDB});
    }).catch(err => console.log(`Error finding movie by ID: ${err}`))
})

/*POST update movie info*/
router.post('/details/:id/edit', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedMovie => {
      console.log({updatedMovie})
      res.redirect('/movies');
    }).catch(err => console.log(`Error updating movie by ID: ${err}`))
})

/* GET new page */
router.get('/new', (req, res, next) =>{
  res.render('movies/new');
})

/* POST add new movie to database*/
router.post('/new', (req, res, next) =>{
  Movie.create(req.body)
    .then(newMovie => {
      console.log(newMovie);
      res.redirect('/movies');
    }).catch(err => console.log(`Error creating new movie: ${err}`))  
})

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/movies');
    }).catch(err => console.log(`Error deleting movie from database: ${err}`))
})



module.exports = router;