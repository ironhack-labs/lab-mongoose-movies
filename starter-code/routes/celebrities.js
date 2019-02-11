const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
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

// Add Celebrity

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ // Done with create instead of save
    name,
    occupation,
    catchPhrase,
  })
    .then((createdObject) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

// Delete
router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
    .then((celebrityId) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

// Editing

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

router.post('/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const { id } = req.params;

  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then((createdObject) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});


module.exports = router;
