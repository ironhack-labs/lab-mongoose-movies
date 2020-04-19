const express = require('express');
const router = express.Router();

const Movies = require('../models/movie.model');

router.get('/index', (req, res, next) => {
	Movies.find()
		.then((allMovies) => res.render('movies/index', { allMovies }))
		.catch((error) => console.log('Error while getting the books from the DB: ', error));
});

//description by id
router.get('/show/:id', (req, res, next) => {
	Movies.findById(req.params.id)
		.then((movieId) => res.render('movies/show', { movieId }))
		.catch((error) => console.log('Error while getting the books from the DB: ', error));
});

//get the form
router.get('/new', (req, res, next) => res.render('movies/new'));

//post new celebrity
router.post('/new', (req, res, next) => {
	const { title, genre, plot } = req.body;
	Movies.create({ title, genre, plot })
		.then(() => res.redirect('/movies/index'))
		.catch((err) => console.log(err));
});
//delete celebrity
router.post('/:id/delete', (req, res, next) => {
	Movies.findByIdAndDelete(req.params.id)
		.then(res.redirect('/movies/index'))
		.catch((err) => console.log(err));
});

//edit celebrity
router.get('/:id/edit', (req, res, next) => {
    Movies.findById(req.params.id)
        .then((editMovie) => res.render('movies/edit', { editMovie }))
        .catch(err => console.log("Hubo un error", err))
})
router.post('/:id/edit', (req, res, next) => {

    const { title, genre, plot } = req.body

    Movies.findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
        .then(res.redirect("/movies/index"))
        .catch(err => console.log("Hubo un error", err))
})













module.exports = router;