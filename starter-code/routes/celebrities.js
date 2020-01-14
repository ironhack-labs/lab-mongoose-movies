const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCelebrities => {
      // res.send(allCelebrities);
      res.render('../views/celebrities/index.hbs', {
        allCelebrities
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/new', (req, res, next) => {
  res.render('../views/celebrities/new.hbs');
});

router.post('/', (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  });
  newCelebrity.save()
    .then(_ => res.redirect('/celebrities'))
    .catch(_ => res.render('../views/celebrities/new.hbs'));
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(_ => res.redirect('/celebrities'))
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/:id/edit', (req, res, next) => {
  // res.send(req.params.id);
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('../views/celebrities/edit.hbs', {
        celebrity
      });
      // res.send(celebrity);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post('/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findOneAndUpdate({ _id: req.params.id }, { name, occupation, catchPhrase }, { new: true })
  .then(_ => res.redirect('/celebrities'))
  .catch(err => {
    console.log(err);
    next();
  });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('../views/celebrities/show.hbs', {
        celebrity
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;