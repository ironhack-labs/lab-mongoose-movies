const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

router.get('/celebrities', (req, res, next) => {
	Celebrity.find().then((allCelebrities) => {
		res.render('celebrities/index', { allCelebs: allCelebrities });
	});
});

router.get('/celebrities/details/:id', (req, res, next) => {
	let id = req.params.id;

	Celebrity.findById(id).populate('movies').then((celebDetails) => {
		// console.log(celebDetails);
		res.render('celebrities/show', celebDetails);
	});
});

router.get('/celebrities/new', (req, res, next) => {
	Movie.find().then((theMovies) => {
		res.render('celebrities/new', { movies: theMovies });
	});
});

router.post('/celebrities/created', (req, res, next) => {
	let name = req.body.theName;
	let occu = req.body.theOccupation;
	let catchP = req.body.theCatchphrase;
	let movies = req.body.theMovies;
	Celebrity.create({ name: name, occupation: occu, catchPhrase: catchP, movies: movies });
	res.redirect('/celebrities');
	console.log(name);
});

router.post('/celebrities/delete/:id', (req, res, next) => {
	let id = req.params.id;

	Celebrity.findByIdAndRemove(id)
		.then((result) => {
			res.redirect('/celebrities');
		})
		.catch((err) => {
			next(err);
		});
});

router.get('/celebrities/edit/:id', (req, res, next) => {
	let id = req.params.id;
	Celebrity.findById(id).then((celebDetails) => {
		Movie.find().then((allMovies) => {
			console.log(celebDetails);
			console.log(allMovies);
			data = {
				details: celebDetails,
				movies: allMovies
			};
			res.render('celebrities/edit', data);
		});
	});
});

router.post('/celebrities/edited/:id', (req, res, next) => {
	let name = req.body.theName;
	let occu = req.body.theOccupation;
	let catchP = req.body.theCatchphrase;
	let movies = req.body.theMovies;
	let id = req.params.id;
	console.log(movies);
	Celebrity.findByIdAndUpdate(id, {
		name: name,
		occupation: occu,
		catchPhrase: catchP,
		movies: movies
	}).then((result) => {
		res.redirect('/celebrities');
	});
});

module.exports = router;
