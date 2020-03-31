const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

// Celebrities
router.get('/celebrities', (req, res, next) => {
	Celebrity.find()
		.then((celebrities) => {
			console.log(celebrities);
			res.render('celebrities', { celebrities });
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/show-celebrity/:celebrityId', (req, res, next) => {
	const { celebrityId } = req.params;

	Celebrity.findById(celebrityId)
		.then((celebrity) => {
			console.log(celebrity);
			res.render('show-celebrity', celebrity);
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/new-celebrity', (req, res, next) => {
	res.render('new-celebrity');
});

router.post('/new-celebrity', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;

	Celebrity.create({ name, occupation, catchPhrase })
		.then((_) => {
			res.redirect('/celebrities');
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/delete-celebrity/:celebrityId', (req, res, next) => {
	const { celebrityId } = req.params;

	Celebrity.findByIdAndRemove(celebrityId)
		.then((celebrity) => {
			console.log(celebrity);
			res.redirect('/celebrities');
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/edit-celebrity/:celebrityId', (req, res, next) => {
	const { celebrityId } = req.params;

	Celebrity.findById(celebrityId)
		.then((celebrity) => {
			console.log(celebrity);
			res.render('edit-celebrity', celebrity);
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.post('/edit-celebrity', (req, res, next) => {
	const { celebrityId, name, occupation, catchPhrase } = req.body;

	Celebrity.findByIdAndUpdate(celebrityId, { $set: { name, occupation, catchPhrase } }, { new: true })
		.then((_) => {
			res.redirect(`/show-celebrity/${celebrityId}`);
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/movies', (req, res, next) => {
	Movie.find()
		.then((movies) => {
			console.log(movies);
			res.render('movies', { movies });
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/show-movie/:movieId', (req, res, next) => {
	const { movieId } = req.params;

	Movie.findById(movieId)
		.then((movie) => {
			console.log(movie);
			res.render('show-movie', movie);
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/new-movie', (req, res, next) => {
	res.render('new-movie');
});

router.post('/new-movie', (req, res, next) => {
	const { title, genre, plot } = req.body;

	Movie.create({ title, genre, plot })
		.then((_) => {
			res.redirect('/movies');
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/delete-movie/:movieId', (req, res, next) => {
	const { movieId } = req.params;

	Movie.findByIdAndRemove(movieId)
		.then((movie) => {
			console.log(movie);
			res.redirect('/movies');
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.get('/edit-movie/:movieId', (req, res, next) => {
	const { movieId } = req.params;

	Movie.findById(movieId)
		.then((movie) => {
			console.log(movie);
			res.render('edit-movie', movie);
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

router.post('/edit-movie', (req, res, next) => {
	const { movieId, title, genre, plot } = req.body;

	Movie.findByIdAndUpdate(movieId, { $set: { title, genre, plot } }, { new: true })
		.then((_) => {
			res.redirect(`/show-movie/${movieId}`);
		})
		.catch((error) => {
			console.log(error);
			// next();
		});
});

module.exports = router;
