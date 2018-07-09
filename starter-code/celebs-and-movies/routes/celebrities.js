const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then ( celebs => {
      console.log(celebs);
      res.render('celebrities/index', {celebs});})
    .catch( ()=> console.log('Error in celebrities route'))
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const {name,occupation,catchPhrase}=req.body;
  new Celebrity({name,occupation,catchPhrase}).save()
    .then ( celeb => {
      console.log('celebrity created')
      console.log(celeb);
      res.redirect('/celebrities');
    })
    .catch( ()    => {
      res.redirect('/celebrities/new');
    })
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then ( ()  => {
      res.redirect('/celebrities');
    })
    .catch( (err)    => {
      next();
      console.log(err);
    })
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then ( celeb => {
      console.log(celeb);
      res.render('celebrities/show', celeb);
    })
    .catch( (err)    => {
      console.log('Error in show one celebrity');
      console.log(err)
      next();
    })
});








module.exports = router;
