const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celeb) => {
      res.render('celebrities/index', { celeb });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/show/:id', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then((celeb) => {
      res.render('celebrities/show', { celeb });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchphrase });
  newCeleb.save()
    .then(() => {
      res.redirect('celebrities');
    })
    .catch((error) => {
      console.log(error);
      res.render('celebrities/new');
    });
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
      res.render('celebrities/index');
    });
});

module.exports = router;
