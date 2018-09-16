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


module.exports = router;