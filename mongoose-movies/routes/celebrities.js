const express = require('express');

const Celebrity = require('../models/celebrity.js');
const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find((err, celebrities) => {
    if(err) {
      next(err);
      return;
    }

    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;

Celebrity.findById(celebrityId, (err, celebDoc) => {
  if(err) {
    next(err);
    return;
  }

  res.render('celebrities/show', {
    celebrity: celebDoc
  });
});
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebDoc) => {
    if (err) {
      next(err);
      return;
    }

    res.render('celebrities/edit', {
      celebrity: celebDoc
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

  Celebrity.findByIdAndUpdate(celebrityId, celebrityUpdates, (err, product) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});

router.post('/celebrities', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const theCelebrity = new Celebrity(celebrityInfo);
  theCelebrity.save((err) => {
    if(err) {
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });
});
module.exports = router;
