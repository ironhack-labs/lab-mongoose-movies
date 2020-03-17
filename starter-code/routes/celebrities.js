const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');




router.get('/', (req, res, next) => {
	Celebrity.find()
		.then((allTheCelebritiesFromDB) => {
			//console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
			res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.create({ name, occupation, catchPhrase })
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch((error) => {
			res.render('celebrities/new');
		});
});

router.get('/new', (req, res, next) => {
	res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((theCelebrity) => {
			console.log('The celebrity I want to see is:', theCelebrity.name);
			res.render('celebrities/show', { celebrity: theCelebrity });
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/:id', (req, res, next) => {
	const { editedName, editedOccupation, editedCatchPhrase } = req.body;
	Celebrity.findByIdAndUpdate( req.params.id, { name: editedName, occupation: editedOccupation, catchPhrase: editedCatchPhrase }, { new: true })
		.then((theCelebrity) => {
			res.redirect('/celebrities');
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/:id/delete', (req, res, next) => {
	Celebrity.findByIdAndRemove(req.params.id)
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:id/edit', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((theCelebrity) => {
			console.log('The celebrity I want to see is:', theCelebrity.name);
			res.render('celebrities/edit', { celebrity: theCelebrity });
		})
		.catch((error) => {
			next(error);
		});
});

module.exports = router;
