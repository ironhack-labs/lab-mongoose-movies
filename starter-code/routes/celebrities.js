const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrities = new Celebrity({name, occupation, catchPhrase});
  newCelebrities
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log('Error in delete celebrities: ', error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      // console.log(celebrity);
      res.render('celebrities/edit', {celebrity});
    })
    .catch(error => {
      console.log('Error in edit celebrities: ', error);
    });
});

router.post('/:id', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  // console.log('==============>', name);
  Celebrity.updateOne({_id: req.params.id}, {name, occupation, catchPhrase})
    .then(celebrity => {
      // console.log('----------------->', celebrity);
      res.redirect('/');
    })
    .catch(error => {
      console.log('Error in edit celebrities: ', error);
    });
});

module.exports = router;
