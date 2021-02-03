const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrities-model');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebrities => {
      res.render('celebrities/index.hbs', { allCelebrities });
    })
    .catch(err => {
      next(err);
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  // let newCelebrity = new Celebrity({
  // name,
  // occupation,
  // catchPhrase
  // });
  // newCelebrity.save()
  Celebrity.create({ name, occupation, catchPhrase })
    .then(result => {
      res.redirect('/celebrities')
    })
    .catch((err) => {
      res.render('celebrities/new');
    })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(() => next());
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celebrityUpdate => {
      res.render('celebrities/edit', celebrityUpdate);
    })
    .catch(err => console.log(err));
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(id, {
    name,
    occupation,
    catchPhrase
  })
    .then(celebrityUpdate => {
      res.redirect('/celebrities')
    })
    .catch(err => console.log(err));
})

router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;