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
				title: "Celebrities",
				celebs: celebs
			});
		}
  });
});

router.get('/:id', (req, res, next) => {
  let celebId = req.params.id;

  Celebrity.findById(celebId, (err, celeb) => {
    if (err) { return next(err); }
    res.render("celebrities/show",{
			clickedCeleb: celeb
		});
	})
});

module.exports = router;
