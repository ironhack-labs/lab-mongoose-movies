const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

/* GET products listing. */

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities/celebrities', { celebrities: celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  Celebrity.create({ name, ocupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/update', (req, res, next) => {
  const { id } = req.params;
  const { name, ocupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(id, { name, ocupation, catchPhrase })
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});


module.exports = router;
