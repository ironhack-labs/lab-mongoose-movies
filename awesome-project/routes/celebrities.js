const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity'); // porque requerimos del modelo? Porque lo vamos a usar para su busqueda en la BD

// Creating a new celebrity. Queremos que vaya a la lista directamente cuando lo creamos

router.get('/new', (req, res, next) => {
	res.render('celebrities/new');
});
// Post a new celebrity
router.post('/new', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;

	const celebrityNew = new Celebrity({ name, occupation, catchPhrase });
	console.log(req.body);
	celebrityNew
		.save()
		.then((celebrityNew) => {
			res.redirect('/celebrities');
		})
		.catch((error) => {
			console.log(error);
		});
});

// Deleting POST Celebreties

router.post('/:id/delete', (req, res, next) => {
	Celebrity.findByIdAndRemove(req.params.id)
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch((err) => {
			console.log(err);
		});
});
// Edit a celebrity -get

router.get('/:id/edit', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((celebrity) => {
			res.render('celebrities/edit', { celebrity });
		})
		.catch((err) => {
			res.render('error', err);
		});
});

// Edit a celebrity -post
router.post('/:id', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	const celebrityEdited = { name, occupation, catchPhrase };
	Celebrity.findByIdAndUpdate(req.params.id, celebrityEdited)
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch((err) => {
			res.render('error', err);
		});
});

// Creating a retrieve details
router.get('/:id', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((celebrity) => {
			res.render('celebrities/show', { celebrity });
		})
		.catch((error) => {
			console.log(error);
		});
});


// Create a retrieve all list
router.get('/', (req, res, next) => {
	// no se pone /celebrities porque ya está definido en el router

	Celebrity.find()
		.then((celebrity) => {
			// Definido en seeds.js como nuevo objeto
			console.log(celebrity);
			res.render('celebrities/index', { celebrity });
		})
		.catch((error) => {
			console.log(error);
		});
});


module.exports = router;
