const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, {}, (err, celebs) => {
    // if (err) {
    //   next(err);
    //   return;
    // }
    res.render('celebrities/index', {
      celebrity: celebs
    });
    //do Stuff
  });
});




router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new', {});
});

router.post('/celebrities', (req, res, next) => {
  const celebrityId = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCelebrity = new Celebrity(celebrityId);
  newCelebrity.save((err) => {
    if (err) {
      next (err);
      return;
    }
    res.redirect('/celebrities');
  });
});


router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, items) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/show', {
      celeb: items
    });
  });
});
router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId, (err, item) => {
    if (err) {
      next (err);
      return;
    }
    res.redirect('/celebrities');
  });
});
router.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, item) => {
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/edit', {
      name: item.name,
      occupation: item.occupation,
      catchPhrase: item.catchPhrase,
      id: item._id
    });
  });
});
router.post('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  const celebrityUpdates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(celebrityId, celebrityUpdates, (err, updates) => {
    res.redirect('/celebrities');
  });
});
module.exports = router;
