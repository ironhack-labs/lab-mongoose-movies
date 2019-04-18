const express = require('express');
const router = express.Router();


const Celebrity = require('../models/celebrity');
// const celebs = require('../data/celebs.json');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      // console.log(celebrities);
      res.render('celebrities/index', {celebrities})
    })
    .catch(err => next(err));
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.post('/celebrities', (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, ocupation, catchPhrase})
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities')
      // console.log('celebrity add to DB')
    })
    .catch( 
      res.render('celebrities/new'),
      );
});

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celeb => {
      res.render('celebrities/show', {celeb})
    })
    .catch(err => next(err));
});




module.exports = router

