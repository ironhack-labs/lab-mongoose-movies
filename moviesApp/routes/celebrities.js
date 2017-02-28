const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebModel.js');

// Coming from index.ejs (not in celeb folder)
router.get('/celebrities', (req, res, next) => {

  Celebrity.find({}, {}, (err, celebs) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/index', {
      result: celebs
    });
  });
});

// Add a new celebrity: form
router.get('/celebrities/new', (req, res, next) => {

  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {

  const newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const thisCeleb = new Celebrity(newCeleb);

  thisCeleb.save((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  let celebId = req.params.id;

  Celebrity.findById(celebId, (err, result) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/edit', {
      result: result
    });
  });
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  let thisId = req.params.id;

	const newCelebInfo = {
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchPhrase
	};

	// Updating a drone. We find it and the update it. First param: the ID. Second param: the new info.
	// Special method 'findByIdAndUpdate' - The 'U' in CRUD.
	Celebrity.findByIdAndUpdate(thisId, newCelebInfo, (err, result) => {

		res.redirect('/celebrities');
	});
});

router.get('/celebrities/:id/delete', (req, res, next) => {
  let thisId = req.params.id;

	Celebrity.findByIdAndRemove(thisId, (err, results) => {
		if (err) {
			next(err);
			return;
		}

		res.redirect('/celebrities');
	});
});

//show detail of one celebrity
router.get('/celebrities/:id', (req, res, next) => {
  let celebId = req.params.id;

  Celebrity.findById(celebId, (err, oneCeleb) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/show', {
      result: oneCeleb
    });
  });
});



module.exports = router;
