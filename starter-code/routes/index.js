const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

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

module.exports = router;
