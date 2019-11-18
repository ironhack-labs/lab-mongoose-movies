require('dotenv').config();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

exports.index = (req, res) => {
	res.render('index');
};

exports.celebritiesView = (req, res) => {
	Celebrity.find({})
		.then((celebrities) => res.render('celebrities/index', { celebrities }))
		.catch((err) => console.log(err));
};

exports.moviesView = (req, res) => {
	Movie.find({})
		.then((movies) => {
			console.log(movies);
			res.render('movies/index', { movies });
		})
		.catch((err) => console.log(err));
};

exports.celebritiesDetailView = (req, res) => {
	const { id } = req.params;
	Celebrity.findById(id)
		.then((celebrity) => {
			res.render('celebrities/show', { celebrity });
		})
		.catch((err) => console.log(err));
};

exports.moviesDetailView = (req, res) => {
	const { id } = req.params;
	Movie.findById(id)
		.then((movie) => {
			res.render('movies/show', { movie });
		})
		.catch((err) => console.log(err));
};

exports.createCelebrityView = (req, res) => {
	res.render('celebrities/new');
};

exports.createMovieView = (req, res) => {
	res.render('movies/new');
};

exports.createCelebrityProcess = (req, res) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.create({ name, occupation, catchPhrase })
		.then((celebrity) => res.redirect('/celebrities'))
		.catch((err) => console.log(err));
};

exports.createMovieProcess = (req, res) => {
	const { title, genre, plot } = req.body;
	console.log(title, genre, plot);
	Movie.create({ title, genre, plot }).then((movie) => res.redirect('/movies')).catch((err) => console.log(err));
};

exports.deleteCelebrityProcess = (req, res) => {
	const { id } = req.params;
	Celebrity.findByIdAndDelete(id).then((celebrity) => res.redirect('/celebrities')).catch((err) => console.log(err));
};

exports.deleteMovieProcess = (req, res) => {
	const { id } = req.params;
	Movie.findByIdAndDelete(id).then((movie) => res.redirect('/movies')).catch((err) => console.log(err));
};

exports.editCelebrityView = (req, res) => {
	const { id } = req.params;
	Celebrity.findById(id)
		.then((celebrity) => {
			const config = {
				action: `/celebrities/${id}/edit`
			};
			res.render('celebrities/edit', { config, celebrity });
		})
		.catch((err) => console.log(err));
};

exports.editMovieView = (req, res) => {
	const { id } = req.params;
	Movie.findById(id)
		.then((movie) => {
			const config = {
				action: `/movies/${id}/edit`
			};
			res.render('movies/edit', { config, movie });
		})
		.catch((err) => console.log(err));
};

exports.editCelebrityProcess = (req, res) => {
	const { id } = req.params;
	const { title, genre, plot } = req.body;
	Celebrity.findByIdAndUpdate(
		id,
		{
			$set: { title, genre, plot }
		},
		{ new: true }
	)
		.then((celebrity) => res.redirect(`/celebrities/${celebrity._id}`))
		.catch((err) => console.log(err));
};

exports.editMovieProcess = (req, res) => {
	const { id } = req.params;
	const { title, genre, plot } = req.body;
	Movie.findByIdAndUpdate(
		id,
		{
			$set: { title, genre, plot }
		},
		{ new: true }
	)
		.then((movie) => res.redirect(`/movies/${movie._id}`))
		.catch((err) => console.log(err));
};
