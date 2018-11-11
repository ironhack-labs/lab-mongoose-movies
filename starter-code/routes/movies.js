const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
	Movie.find()
	.then(movies => {
		console.log(movies)
		res.render('movies/index', {movies});
	})
	.catch(error => {
		res.render(error);
	})
});

router.get('/movies/:id', (req, res, next) => {
	let movieId = req.params.id;
	Movie.findOne({'_id': movieId})
	.then(movie => {
		console.log(movie)
		res.render('movies/show', {movie});
	})
	.catch(error => {
		res.render('error');
	})
});


router.get('/movie/new', (req, res, next) => {
	Movie.find()
	.then(movies => {
		console.log(movies)
		res.render('movies/new', {movies});
	})
	.catch(error => {
		res.render('error');
	})
});

router.post('/movie/new', (req, res, next) => {
	const { title, director, stars, genre, description, spoilers } = req.body;
	const newCeleb = new Movie({ title, director, stars, genre, description, spoilers });
	newCeleb.save()
	.then((movie) => {
		res.redirect('/movies');
	})
	.catch((error) => {
		res.render('error');
	})
});

router.post('/movies/:id/delete', (req, res, next) => {
	let movieId = req.params.id;
	Movie.findByIdAndRemove({'_id': movieId})
	.then((movie) => {
		res.redirect('back');
	})
	.catch((error) => {
		res.render('error');
	})
});


router.get('/movies/:id/edit', (req, res, next) => {
	const movieId = req.params.id;
	Movie.findOne({'_id': movieId})
	.then(movie => {
		console.log(movie)
		res.render('movies/edit', {movie});
	})
	.catch((error) => {
		res.render('error')
	})
});

router.post('/movies/:id', (req, res, next) => {
	const { title, director, stars, genre, description, spoilers } = req.body;
	const movieId = req.params.id;
  Movie.update({'_id': movieId}, { $set: { title, director, stars, genre, description, spoilers }})
  .then((movie) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
