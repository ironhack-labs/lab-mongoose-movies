const express = require('express');
const router  = express.Router();
const Celebrity = require(`../models/Celebrity`)

router.get('/', (req, res, next) => {
  Celebrity.find().then((allCelebs) =>{
  res.render('celebrities/index', {allCelebs});
  })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then((celebrityFound) => {
      res.render('celebrities/show', celebrityFound)
    })
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
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      res.render('celebrities/edit', celebrity)
    })
    .catch(() => {
      next()
    })
});

router.post('/celebrities/:id', (req, res, next) => {
  Celebrity.findByIdAndUpdate(
    req.body.id,
      {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
      },
      { new: true }
  ).then(() => {
     res.redirect('/celebrities');
  });
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