const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

  /* GET home page */
  router.get('/', (req, res, next) => {
    Celebrity.find()
    .then((data) => {
      res.render('celebrities/index', {data});
    })
    .catch(e => next(e))
  });

  router.get('/new', (req, res) => {
    res.render('celebrities/new');
  });

  router.post('/new', (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    const celebrity = new Celebrity({name, occupation, catchPhrase});
    celebrity.save()
    .then(() => res.redirect('/celebrities'))
    .catch(e => next(e));
  });

  router.get('/:celebrityId/delete', (req, res) => {
    Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(() => res.redirect('/celebrities'))
    .catch(e => next(e));    
  });

  router.get('/:celebrityId', (req, res, next) => {
    Celebrity.find({_id: req.params.celebrityId})
    .then((data) => {
      res.render('celebrities/show', {data});
    })
    .catch(e => next(e));
  });


module.exports = router;
