const express = require('express');

const Movie = require('../models/Movie.model')

const router = express.Router();


// route /movies
router.get('/', (req, res, next) => {

  Movie.find(null, null, {sort: {title: 1}}).then((moviesFromDB) => {
    console.log(moviesFromDB)
    res.render('movies/index', { allTheMovies: moviesFromDB })
  })
});


// show form to user
// GET /movies/new
// tricky case: remember to keep it above the code rendering /:id route! in other case browser will try to render "new" as an id and it will cause an error
router.get('/new', (req, res, next) => {
  res.render('movies/new')
});


// route /movies/:id
router.get('/:id', (req, response, next) => {

  Movie.findById(req.params.id).then((movie) => {
      response.render('movies/show', movie) // 
  })

});


// pick up data from submitted form
// POST /movies/new
// name: req.body.name = ModelPropertyName.req.body.formInputFieldName
router.post('/new', (req, res, next) => {

  console.log(req.body);
  Movie.create({ name: req.body.title, genre: req.body.genre, plot: req.body.plot }).then(() => {
    res.redirect('/movies')
  })
});


// POST /movies/id/delete
router.post('/:id/delete', (req, res, next) => {

  Movie.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/movies')
  })
});


// GET movies/id/edit
router.get('/:id/edit', (req, res, next) => {

  Movie.findById(req.params.id).then((movie) => {
    res.render('movies/edit', movie)
  })
});


// POST movies/id/edit
router.post('/:id/edit', (req, res, next) => {

  Movie.findByIdAndUpdate(req.params.id, { name: req.body.title, genre: req.body.genre, plot: req.body.plot }).then(() => {
    res.redirect('/movies')
  })
});


module.exports = router;