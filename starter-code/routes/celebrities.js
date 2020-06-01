const express = require('express');
const Celebrity = require('../models/celebrity');
const route = express.Router();

route.get('/', (req, res, next) => {
	Celebrity.find()
		.then((celebrities) => res.render('celebrities/index', { celebrities }))
		.catch((err) => next());
});
route.post('/', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.create({ name, occupation, catchPhrase })
		.then((cel) => res.redirect('/celebrities'))
		.catch((err) => {
			console.log(`Error creating a celebrity: ${err}`);
			res.render('celebrities/new');
		});
});
route.get('/:id/edit', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((celebrity) => res.render('celebrities/edit', celebrity))
		.catch((err) => {
			console.log(`Error editing a celebrity: ${err}`);
			next();
		});
});
route.get('/:id', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((celebrity) => res.render('celebrities/show', celebrity))
		.catch((err) => next());
});
route.post('/:id', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.update({ _id: req.params.id }, { name, occupation, catchPhrase })
		.then((cel) => res.redirect('/celebrities'))
		.catch((err) => {
			console.log(`Error saving a celebrity: ${err}`);
			next();
		});
});
route.get('/new', (req, res, next) => {
	res.render('celebrities/new');
});

route.post('/:id/delete', (req, res, next) => {
	Celebrity.findByIdAndRemove(req.params.id)
		.then((celebrity) => res.redirect('/celebrities'))
		.catch((err) => {
			console.log(`Error deleting a celebrity: ${err}`);
			next();
		});
});

module.exports = route;
