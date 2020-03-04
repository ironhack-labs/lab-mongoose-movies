const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', { movies });
    })
    .catch(next);
});

router.get('/new', (req, res, next) => {
	res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', { movie });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
	const { title, genre, plot } = req.body;
	Movie.create({
		title,
		genre,
		plot
	})
	.then(() => {
		res.redirect('/movies');
	})
	.catch(next);
});

router.post('/:id/delete', (req, res, next) => {
	const { id } = req.params;

	Movie.findByIdAndDelete(id)
		.then(() => {
			res.redirect('/movies');
		})
		.catch(next);
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/edit', { movie });
    })
    .catch(next);
});

router.post('/:id', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const { id } = req.params;

	Movie.update({ _id : id }, { $set: { title, genre, plot }})
		.then(() => {
			res.redirect('/movies');
		})
		.catch(next);
});



module.exports = router;
