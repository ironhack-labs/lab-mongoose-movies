"use strict";
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

//C(R)UD -> Retrieve
router.get('/', (req, res, next) => {
	Movie.find()
		.then(movies => {
			res.render('movies/index', {movies, title: 'Movies'});
		})
		.catch( e => {
			console.log('Error on retrieving the list of movies', e);
			next(e);
		})
});

//C(R)UD -> Retrieve One
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Movie.findById({_id:id})
	.then(movie => {
		console.log(movie);
		res.render('movies/show', {movie, title: 'Movie Detail'});
	})
	.catch(e => {
		console.log('Error on retrieving the detail of the movie', e);
		next(e);
	})
});

module.exports = router;