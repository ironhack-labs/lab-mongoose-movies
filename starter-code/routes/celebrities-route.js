const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrities')

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id).then(oneCelebrity => {
    res.render('celebrities/edit', oneCelebrity)
  });
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      res.render('celebrities/index', { Celebrities: allCelebrities })
    }).catch((err) => {
      console.log("espabilaaa")
    })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
});

router.post('/celebrities/:id', (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(oneCelebrity => {
    res.render('celebrities/show', oneCelebrity)
  });
});

router.post('/celebrities', (req, res, next) => {
  Celebrity.create(req.body)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
});




module.exports = router;