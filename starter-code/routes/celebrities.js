const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then((celeb) => {
      res.render('celebrities', { celeb });
    })
    .catch(err => console.log(err));
});

router.get('/celebrities/:celebID', (req, res) => {
  Celebrity.findById(req.params.celebID)
    .then((celeb) => {
      res.render('celebrity-page', celeb);
    })
    .catch(err => console.log(err));
});

router.get('/celeb/new', (req, res) => {
  res.render('celebrity-new');
});

router.post('/celeb/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb.save()
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err));
});

module.exports = router;
