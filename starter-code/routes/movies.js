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

module.exports = router;
