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

//(C)RUD -> Show
router.get('/new', (req, res, next) => {
	res.render('movies/new', {title: 'Create a new movie'});
});

//C(R)UD -> Retrieve One
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Movie.findById({_id:id})
	.then(movie => {
		res.render('movies/show', {movie, title: 'Movie Detail'});
	})
	.catch(e => {
		console.log('Error on retrieving the detail of the movie', e);
		next(e);
	})
});

//CR(U)D -> Update Show
router.get('/:id/edit', (req, res, next) => {
	const id = req.params.id;
	Movie.findById({_id:id})
		.then(movie => {
			res.render('movies/edit', {movie, title: 'Edit a movie'});
		})
		.catch( e => {
			console.log('Error on showing the form to update a movie', e);
			next(e);
		})
})

//(C)RUD -> Create
router.post('/', (req, res, next) => {
	const { title, genre, plot } = req.body;
	const newMovie = new Movie({ title, genre, plot });
	newMovie.save()
		.then( movie => {
			res.redirect('/movies');
		})
		.catch( e => {
			console.log('Error on creating a new movie', e);
			res.render('movies/new', {title: 'Create a new movie'});
		})
});

//CR(U)D -> Update
router.post('/:id', (req, res, next) => {
	const id = req.params.id;
	const { title, genre, plot } = req.body;

	Movie.update({_id: id}, {$set: {title, genre, plot}}, { new: true })
		.then( movie => {
			res.redirect('/movies');
		})
		.catch( e => {
			console.log('Error on updating the movie', e);
	 		next(e);
		})
});

//CRU(D) -> Delete
router.post('/:id/delete', (req, res, next) => {
	const id = req.params.id;
	Movie.findByIdAndRemove({_id:id})
		.then( movie => {
			res.redirect('/movies');
		})
		.catch(e => {
			console.log('Error on removing the movie', e);
			next(e);
		})
});

module.exports = router;