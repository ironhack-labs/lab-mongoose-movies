"use strict";
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

//C(R)UD -> Retrieve
router.get('/', (req, res, next) => {
	Celebrity.find()
		.then(celebrities => {
			res.render('celebrities/index', {celebrities, title: 'Celebrities'});
		})
		.catch( e => {
			console.log('Error on retrieving the list of celebrities', e);
			next(e);
		})
});

//(C)RUD -> Show
router.get('/new', (req, res, next) => {
	res.render('celebrities/new', {title: 'Create a new celebrity'});
});

//C(R)UD -> Retrieve One
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Celebrity.findById({_id:id})
	.then(celebrity => {
		res.render('celebrities/show', {celebrity, title: 'Celebrity Detail'});
	})
	.catch(e => {
		console.log('Error on retrieving the detail of the celebrity', e);
		next(e);
	})
});

//CR(U)D -> Update Show
router.get('/:id/edit', (req, res, next) => {
	const id = req.params.id;
	Celebrity.findById({_id:id})
		.then(celebrity => {
			res.render('celebrities/edit', {celebrity, title: 'Edit a celebrity'});
		})
		.catch( e => {
			console.log('Error on showing the form to update a celebrity', e);
			next(e);
		})
})

//(C)RUD -> Create
router.post('/', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
	newCelebrity.save()
		.then( celebrity => {
			res.redirect('/celebrities');
		})
		.catch( e => {
			console.log('Error on creating a new celebrity', e);
			res.render('celebrities/new', {title: 'Create a new celebrity'});
		})
});

//CR(U)D -> Update
router.post('/:id', (req, res, next) => {
	const id = req.params.id;
	const { name, occupation, catchPhrase } = req.body;

	Celebrity.update({_id: id}, {$set: {name, occupation, catchPhrase}}, { new: true })
		.then( celebrity => {
			res.redirect('/celebrities');
		})
		.catch( e => {
			console.log('Error on updating the celebrity', e);
	 		next(e);
		})
});

//CRU(D) -> Delete
router.post('/:id/delete', (req, res, next) => {
	const id = req.params.id;
	Celebrity.findByIdAndRemove({_id:id})
		.then( celebrity => {
			res.redirect('/celebrities');
		})
		.catch(e => {
			console.log('Error on removing the celebrity', e);
			next(e);
		})
});

module.exports = router;