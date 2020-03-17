const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrity');



router.get('/', (req, res) => {
	Celebrities.find()
		.then(result => {
			res.render('celebrities/index', { result });
		})
		.catch(error => {
			console.log('Error while getting the celebrities', error);
		})
});

router.get('/new', (req, res) => {
	res.render('celebrities/new')
});

router.get('/:id/edit', (req, res) => {
	Celebrities.findById(req.params.id)
		.then(result => {
			res.render('celebrities/edit', result);
		})
});


router.get('/:id', (req, res) => {
	Celebrities.findById(req.params.id)
		.then(celebrity => {
			res.render('celebrities/show', {celebrity})
		});
});


router.post('/new', (req, res) => {
	Celebrities.create(req.body)
	.then(() => {
		res.redirect('/celebrities');
	})
		.catch(() => res.render('celebrities/new', {errorMessage: 'Error while adding a new celebrity. Try again'}))
});


router.post('/:id/delete', (req, res, next) => {
	Celebrities.findByIdAndDelete(req.params.id)
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch((error) => {
			next(error);
		})
});

router.post('/:id', (req, res) => {
	Celebrities.findOneAndUpdate({_id:req.params.id}, req.body)
		.then(res.redirect('/celebrities'));
});


module.exports = router;
