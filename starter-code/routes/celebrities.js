const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity
    .find()
    .then(data => {
      console.log(data)
      res.render('celebrities/index', {
        data
      })
    })
    .catch(error => console.log(error))
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.post('/', (req, res) => {
  console.log('body: ', req.body);

  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
  .then(response => {
    console.log(response);
    res.redirect('celebrities');
  })
  .catch(error => {
    console.log(error)
    res.render('celebrities/new')
  });
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(error => console.log(error))
});

router.get('/:id', (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then(data => {
      console.log(data)
      res.render('celebrities/show', {
        data
      })
    })
    .catch(error => console.log(error))
});


router.get('/:id/edit', (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then(data => {
      console.log(data)
      res.render('celebrities/edit', {
        data
      })
    })
    .catch(error => console.log(error))
});

router.post('/:id', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  const {
    celebId
  } = req.query;

  Book.findByIdAndUpdate(celebId, {
      $set: {
        name,
        occupation,
        catchPhrase
      }
    }, {
      new: true
    })
    .then(response => {
      console.log(response);
      res.redirect(`celebrities/${celebId}`);
    })
    .catch(error => console.log(error));
});

module.exports = router;
