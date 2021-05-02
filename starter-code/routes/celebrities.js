const express = require('express');
// const { reset } = require('nodemon');
const router  = express.Router();

const Celebrity = require('../models/celebrity.model');

router.get('/', (req, res, next) => {
    Celebrity.find({})
        .then(result => res.render('celebrities/index', {celebrities: result})) 
        .catch(err => next(err));
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCeleb = new Celebrity({ name, occupation, catchPhrase });
    Celebrity.create(newCeleb)
        .then(res.redirect('/celebrities'))
        .catch(err => next(err));
});

router.get('/:celebId', (req, res, next) => {
    const { celebId } = req.params;
    Celebrity.findById(celebId)
        .then(result => res.render('celebrities/show', {celeb: result}))
        .catch(err => next(err));
});

router.post('/:celebId/delete', (req, res, next) => {
    const { celebId } = req.params;
    Celebrity.findByIdAndRemove(celebId)
        .then(res.redirect('/celebrities'))
        .catch(err => next(err));
});

router.get('/:celebId/edit', (req, res, next) => {
    const { celebId } = req.params;
    Celebrity.findById(celebId)
        .then(result => res.render('celebrities/edit', {celeb: result}))
        .catch(err => next(err));
});

router.post('/:celebId/edit', (req, res, next) => {
    const { celebId } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.findByIdAndUpdate(celebId, { name, occupation, catchPhrase })
        .then(res.redirect('/celebrities'))
        .catch(err => next(err));
});

module.exports = router;