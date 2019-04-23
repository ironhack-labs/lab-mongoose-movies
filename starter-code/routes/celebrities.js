const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((result) => {
      res.render('celebrities/index', { celeb: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((result) => {
      res.render('celebrities/show', { show: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/celebrities/del/:celeb_id', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celeb_id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
