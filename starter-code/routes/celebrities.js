const express = require('express');

const router = express.Router();
const Celebrities = require('../models/Celebrity');

router.get('/', (req, res) => {
  Celebrities.find({})
    .then((celebrities) => res.render('celebrities/celebrities', { celebrities }))
    .catch((error) => console.log(error));
});

router.get('/new', (req, res) => {
  res.render('celebrities/new-celebrity');
});

router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  new Celebrities({ name, occupation, catchPhrase }).save()
    .then((result) => res.redirect('/celebrities'))
    .catch((error) => console.log(error));
});

router.get('/remove/:id', (req, res) => {
  Celebrities.deleteOne({ _id: req.params.id })
    .then((result) => res.render('celebrities/celebrities'))
    .catch((error) => console.log(error));
});

router.get('/edit/:id', (req, res) => {
  Celebrities.findOne({ _id: req.params.id })
    .then((celebrity) => res.render('celebrities/update-celebrity', { celebrity }))
    .catch((error) => console.log(error));
});

router.post('/edit/:id', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrities.findOne({ _id: req.params.id })
    .then((celebrity) => {
      celebrity.name = name;
      celebrity.occupation = occupation;
      celebrity.catchPhrase = catchPhrase;

      return celebrity.save();
    })
    .then((result) => res.redirect('/celebrities'))
    .catch((error) => console.log(error));
});

module.exports = router;
