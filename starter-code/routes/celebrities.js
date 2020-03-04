const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(next);
});

router.get('/new', (req, res, next) => {
	res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.create({
		name,
		occupation,
		catchPhrase,
	})
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch(next);
});

router.post('/:id/delete', (req, res, next) => {
	const { id } = req.params;

	Celebrity.findByIdAndDelete(id)
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch(next);
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(next);
});

router.post('/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const { id } = req.params;

	Celebrity.update({ _id : id }, { $set: { name, occupation, catchPhrase }})
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch(next);
});



module.exports = router;
