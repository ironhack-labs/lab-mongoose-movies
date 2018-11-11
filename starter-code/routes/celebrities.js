const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
	Celebrity.find()
	.then(celebrities => {
		console.log(celebrities)
		res.render('celebrities/index', {celebrities});
	})
	.catch(error => {
		res.render('error');
	})
});

router.get('/celebrities/:id', (req, res, next) => {
	let celebId = req.params.id;
	Celebrity.findOne({'_id': celebId})
	.then(celeb => {
		console.log(celeb)
		res.render('celebrities/show', {celeb});
	})
	.catch(error => {
		res.render('error');
	})
});

router.get('/celebrity/new', (req, res, next) => {
	Celebrity.find()
	.then(celebrities => {
		console.log(celebrities)
		res.render('celebrities/new', {celebrities});
	})
	.catch(error => {
		res.render('error');
	})
});

router.post('/celebrity/new', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	const newCeleb = new Celebrity({ name, occupation, catchPhrase});
	newCeleb.save()
	.then((celeb) => {
		res.redirect('/celebrities');
	})
	.catch((error) => {
		res.render('error');
	})
});

router.post('/celebrities/:id/delete', (req, res, next) => {
	let celebId = req.params.id;
	Celebrity.findByIdAndRemove({'_id': celebId})
	.then((celeb) => {
		res.redirect('back');
	})
	.catch((error) => {
		res.render('error');
	})
});

router.get('/celebrities/:id/edit', (req, res, next) => {
	const celebId = req.params.id;
	Celebrity.findOne({'_id': celebId})
	.then(celeb => {
		console.log(celeb)
		res.render('celebrities/edit', {celeb});
	})
	.catch((error) => {
		res.render('error')
	})
});

router.post('/celebrities/:id', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	const celebId = req.params.id;
  Celebrity.update({'_id': celebId}, { $set: {name, occupation, catchPhrase }})
  .then((celeb) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
