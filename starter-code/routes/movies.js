const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');




router.get('/', (req, res, next) => {
	Movie.find()
		.then((allTheMoviesFromDB) => {
			//console.log('Retrieved movies from DB:', allTheMoviesFromDB);
			res.render('movies/index', { movies: allTheMoviesFromDB });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Movie.create({ name, occupation, catchPhrase })
		.then(() => {
			res.redirect('/movies');
		})
		.catch((error) => {
			res.render('movies/new');
		});
});

router.get('/new', (req, res, next) => {
	res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
	Movie.findById(req.params.id)
		.then((theMovie) => {
			console.log('The movie I want to see is:', theMovie.name);
			res.render('movies/show', { movie: theMovie });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/:id', (req, res, next) => {
	const { editedTitle, editedGenre, editedPlot } = req.body;
	Movie.findByIdAndUpdate( req.params.id, { title: editedTitle, genre: editedGenre, plot: editedPlot }, { new: true })
		.then((theMovie) => {
			res.redirect('/movies');
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/:id/delete', (req, res, next) => {
	Movie.findByIdAndRemove(req.params.id)
		.then(() => {
			res.redirect('/movies');
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:id/edit', (req, res, next) => {
	Movie.findById(req.params.id)
		.then((theMovie) => {
			console.log('The movie I want to see is:', theMovie.name);
			res.render('movies/edit', { movie: theMovie });
		})
		.catch((error) => {
			next(error);
		});
});

module.exports = router;
