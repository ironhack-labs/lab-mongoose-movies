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
		const { title, genre, plot } = movie;
		console.log(`Found movie is ${movie}`);
		res.render('movies/show', { title, genre, plot });
	} catch (error) {
		next();
		console.log(error.message);
	}
});

// Create route
router.get('/new', (req, res, next) => {
	res.render('movies/new', { title: 'Add new movie' });
});

router.post('/new', async (req, res, next) => {
	try {
		const { title, genre, plot } = req.body;
		const movie = await Movie.create({ title, genre, plot });
		console.log(`New movie created: ${movie}`);
		res.redirect('/movies');
	} catch (error) {
		res.render('/movies/new');
		console.log(`This went wrong ${error}, try again`);
	}
});

// Delete route
router.post('/:id/delete', async (req, res, next) => {
	try {
		const { id } = req.params;
		const movie = await Movie.findByIdAndRemove(id);
		console.log(`This movie has been removed: ${movie}`);
		res.redirect('/movies');
	} catch (error) {
		next(error.message);
	}
});

// Update route
router.get('/:id/edit', async (req, res, next) => {
	try {
		const { id } = req.params;
		const movie = await Movie.findById(id);
		const { title, genre, plot } = movie;
		console.log(`This movie is going to be edited: ${movie}`);
		res.render('movies/edit', { title: `Edit ${title}`, title, genre, plot });
	} catch (error) {
		next(error.message);
	}
});
router.post('/:id/edit', async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, genre, plot } = req.body;
		await Movie.findByIdAndUpdate(id, { title, genre, plot });
		res.redirect('/movies');
	} catch (error) {
		next(error.message);
	}
});

module.exports = router;
