const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies');

// Retrieve all data route
router.get('/', async (req, res, next) => {
	try {
		const movies = await Movie.find({});
		res.render('movies/index', { title: 'Movies', movie: movies });
		console.log(`Found and rendered this movies: ${movies}`);
	} catch (error) {
		next(error.message);
	}
});

// Retrieve one document route
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const movie = await Movie.findById(id);
		const { title, genres, plot } = movie;
		console.log(`Found movie is ${movie}`);
		res.render('movies/show', { title, genres, plot });
	} catch (error) {
		next();
		console.log(error.message);
	}
});

module.exports = router;
