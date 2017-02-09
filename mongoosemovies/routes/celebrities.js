const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebs) => {
    if (err) {
			return next(err)
		}
		else {
			res.render('celebrities/index', {
				title: "Mongoose Movies",
				celebs: celebs
			});
		}
  });
});

module.exports = router;
