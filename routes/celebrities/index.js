const express = require('express');

const Celebrity = require('../../models/celebrity');

const router = express.Router();

/* Display the new celebrity form */
router.get('/new', (req, res) => {
  res.render('celebrities/new');
});

/* Show all celebrities */
router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      next(err);
    }
    res.render('celebrities', { celebrities });
  });
});

/* Show a specific celebrity */
router.get('/:celebrityId', (req, res, next) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      next(err);
    }
    res.render('celebrities/show', { celebrity });
  });
});

/* Add a new celebrity to the database */
router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  const newCelebrity = new Celebrity(celebrityInfo);
  newCelebrity.save((err) => {
    if (err) {
      return res.render('celebrities/new', { errors: newCelebrity.errors });
    }
    return res.redirect('celebrities');
  });
});

/* Delete Route: */
router.get('/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId, (err) => {
    if (err) { next(err); }
    return res.redirect('/celebrities');
  });
});

/* Editing Celebrities */
router.get('/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { next(err); }
    res.render('celebrities/edit', { celebrity });
  });
});

router.post('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  const updates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  const updatedCelebrity = new Celebrity(updates);

  Celebrity.findOneAndUpdate(celebrityId, updates, { runValidators: true }, (err) => {
    if (err) {
      return res.render('celebrities/edit', { errors: err.errors, celebrity: updatedCelebrity });
    }
    return res.redirect('/celebrities');
  });
});

module.exports = router;
