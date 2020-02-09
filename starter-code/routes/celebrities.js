const express = require('express');
const router  = express.Router();
const Celebrity = require(`../models/Celebrity`)

router.get('/', (req, res, next) => {
  Celebrity.find().then((allCelebs) =>{
  res.render('celebrities/index', {allCelebs});
  })
});

router.get('/:id', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then((celebrityFound) => {
      res.render('celebrities/show', celebrityFound)
    })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
  .then(() => {
    res.redirect('/celebrities')
  })
});

router.post('/:id/edit', (req, res, next) => {
  Celebrity.findOneAndUpdate({ _id: req.body.id })
    .then((celebrity) => {
      res.render('celebrities/edit', celebrity)
    })
    .catch(() => {
      next()
    })
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.body.id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(() => {
      next()
    })
});

module.exports = router;