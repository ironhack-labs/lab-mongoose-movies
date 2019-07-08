const express = require('express');

const router = express.Router();

const Celebrity = require('../models/celebrity');

// add
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(() => {
      res.render('/celebrities/new');
    });
});

// delete
router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebID = req.params.id;
  Celebrity.findByIdAndRemove(celebID)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      next(err);
    });
});

// edit
router.get('/celebrities/:id/edit', (req, res, next) => {
  const celebID = req.params.id;
  Celebrity.findById(celebID)
    .then((celebrity) => {
      res.render('celebrities/edit', celebrity);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/celebrities/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebID = req.params.id;
  Celebrity.findByIdAndUpdate(celebID, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      next(err);
    });
});

// read
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrity) => {
      res.render('./celebrities/index', { celebrity });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebID = req.params.id;
  Celebrity.findById(celebID)
    .then((celebrity) => {
      res.render('./celebrities/show', celebrity);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
