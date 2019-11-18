const express = require('express');
const router = express.Router();
const {
	index,
	celebritiesView,
	celebritiesDetailView,
	createCelebrityView,
	createCelebrityProcess,
	deleteCelebrityProcess,
	editCelebrityView,
	editCelebrityProcess,
	moviesView,
	moviesDetailView,
	createMovieView,
	createMovieProcess,
	deleteMovieProcess,
	editMovieView,
	editMovieProcess
} = require('../controllers/index.controller');

/* GET home page */
/**
 * Celebrities routes
 */
router.get('/', index);
router.get('/celebrities', celebritiesView);
router.get('/celebrities/new', createCelebrityView);
router.get('/celebrities/:id', celebritiesDetailView);
router.post('/celebrities', createCelebrityProcess);
router.post('/celebrities/:id/delete', deleteCelebrityProcess);
router.get('/celebrities/:id/edit', editCelebrityView);
router.post('/celebrities/:id', editCelebrityProcess);

/**
 * Movies routes
 */
router.get('/movies', moviesView);
router.get('/movies/new', createMovieView);
router.get('/movies/:id', moviesDetailView);
router.post('/movies', createMovieProcess);
router.post('/movies/:id/delete', deleteMovieProcess);
router.get('/movies/:id/edit', editMovieView);
router.post('/movies/:id', editMovieProcess);

module.exports = router;
