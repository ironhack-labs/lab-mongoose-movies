const express = require('express');

const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/', (req, res) => {
  Celebrity.find()
    .then((result) => {
      res.render('celebrities/index', { celeb: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/new', (req, res) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then((result) => {
      res.render('celebrities/show', { show: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/new', (req, res) => {
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

router.post('/del/:celeb_id', (req, res) => {
  Celebrity.findByIdAndDelete(req.params.celeb_id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
