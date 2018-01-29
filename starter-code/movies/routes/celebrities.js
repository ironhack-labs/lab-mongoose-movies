const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { next(err); }
    res.render('celebrities/index.ejs', { celebrities });
  })
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new.ejs');
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPharse } = req.body;
  Celebrity.create({ name, occupation, catchPharse }, (err, docs) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrities) => {
    if (err) { next(err); }
    res.render('celebrities/show', { celebrities });
  })
});

router.get('/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { next(err); }
    res.render('celebrities/edit', { celebrity });
  });
});

router.post('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndUpdate(celebrityId, req.body, (err, celebrity) => {
    if (err) { next(err); }
    res.redirect('/celebrities');
  });
});

router.post('/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if (err) { next(err); }
    res.redirect('/celebrities');
  });
});

module.exports = router;
