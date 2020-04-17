const express = require('express');
const router = new express.Router();
const Celebrity = require('../models/celebrity');

// READ ALL
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then((dbRes) => {
      res.render('celebrities/index.hbs', {
        celebrities: dbRes,
      });
    })
    .catch((next) => {
      console.log(next);
    });
});

// CREATE
router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res) => {
  Celebrity.create(req.body)
    .then((dbRes) => {
      res.redirect('/celebrities');
    })
    .catch((dbErr) => console.log(dbErr));
});

// READ ONE
router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then((dbRes) => {
      res.render('celebrities/show.hbs', {
        celebrity: dbRes,
      });
    })
    .catch((err) => console.log(err));
});

// DELETE
router.post('/celebrities/:id/delete', (req, res) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      res.redirect('/celebrities');
    })
    .catch((err) => console.log(err));
});

// UPDATE

router.get('/celebrities/:id/edit', (req, res) => {
  Celebrity.findById(req.params.id)
    .then((dbRes) => {
      res.render('celebrities/edit.hbs', {
        celebrity: dbRes,
      });
    })
    .catch((err) => console.log(err));
});

router.post('/celebrities/:id/edit', (req, res) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((dbRes) => {
      res.redirect('/celebrities');
    })
    .catch((err) => console.log(err));
});

module.exports = router;
