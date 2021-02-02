const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(error => console.log('Error while getting the celebrities from the DB: ', error));
});

router.get('/new', (req, res, next) => res.render('celebrities/new'));

router.post('/new', (req, res, next) => {
    Celebrity.create(req.body)
        .then(()=> res.redirect('/celebrities'))
        .catch(err => {
            console.log(err);
            res.redirect('/celebrities/new');
        });
});

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrity => res.render('celebrities/show', celebrity))
      .catch(err => next(err));
});

router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(()=> res.redirect('/celebrities'))
        .catch(err => next(err));
});

router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrity => res.render('celebrities/edit', celebrity))
      .catch(err => next(err));
});

router.post('/:id/edit', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body)
        .then(celeb => res.redirect('/celebrities/'))
        .catch(err => next(err));
});

module.exports = router;