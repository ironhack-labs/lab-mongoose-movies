const router = require('express').Router();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

router.get('/celebrities', (req, res) => {
  Celebrity.find().then((allCelebs) => {
    res.render('celebrities/celebs-list', { celebs: allCelebs });
  });
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/celebs-new');
});

router.post('/celebrities/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase }).then((resFromDb) => {
    res.redirect('/celebrities');
  });
});

router.post('/celebrities/delete/:id', (req, res) => {
  const id = req.params.id;
  Celebrity.findByIdAndDelete(id).then(res.redirect('/celebrities'));
});

router.get('/celebrities/:id', (req, res) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId).then((singleCeleb) => {
    res.render('celebrities/celebs-details', singleCeleb);
  });
});

module.exports = router;
