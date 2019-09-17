const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', { celebrities: celebrities });
        })
        .catch(e => next(e))
});

router.get('/details/:id', (req, res, next) => {
    Celebrity.findById(req.params.id).populate('movies')
        .then(async celebrity => {
            res.render('celebrities/show', { celebrity });
        })
        .catch(e => next(e))
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/create')
});

router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(_ => {
            res.redirect('/celebrities')
        })
        .catch(e => next(e))
});


router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/edit', { celebrity })
        })
        .catch(e => next(e))
});

router.post('/:id', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body)
        .then(_ => {
            res.redirect('/celebrities')
        })
        .catch(e => next(e))
});

router.post('/', (req, res, next) => {
    Celebrity.create(req.body)
        .then(celebrity => {
            celebrity.save()
            res.redirect('/celebrities')
        })
        .catch(e => res.redirect('/celebrities/new'))
});

module.exports = router;