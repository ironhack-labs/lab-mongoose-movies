const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();


router.get('/celebrities', (req, res, next) => {
	Celebrity.find({}, (err, celebrities) => {
		if (err) { return next(err) }

			res.render('celebrities/index', {
				celebrities: celebrities
			});
	});
});


router.get('/celebrities/:id/show', (req, res, next) => {
	const celebrityId = req.params.id;

	Celebrity.findById(celebrityId, (err, celebrity) => {
		if (err) { return next(err); }

		res.render('celebrities/show', {
			celebrity: celebrity
		});
	});
});




module.exports = router;