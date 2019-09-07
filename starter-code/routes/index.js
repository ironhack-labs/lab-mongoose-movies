const express = require('express');
const router  = express.Router();
const {createCelebritiesPage, createCelebritiesDetailPage, createCelebrityForm, createCelebrity, deleteCelebrities} = require('../controllers/celebrities')
const {createMoviePage, createMovieDetailPage, createMovieForm, createMovie, deleteMovie} = require('../controllers/movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Celebrities */
router.get('/celebrities/', createCelebritiesPage)
router.get('/celebrities/:id', createCelebritiesDetailPage)
router.get('/celebrities/new', createCelebrityForm)
router.post('/celebrities', createCelebrity)
router.post('/celebrities/:id/delete', deleteCelebrities)

/* Movies */
router.get('/movies/', createMoviePage)
router.get('/movies/:id', createMovieDetailPage)
router.get('/movies/new', createMovieForm)
router.post('/movies', createMovie)
router.post('/movies/:id/delete', deleteMovie)

module.exports = router;
