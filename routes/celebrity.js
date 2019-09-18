const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
    Celebrity.find({}).populate('createdBy')
        .then(celebrities => {
            res.render('celebrities/index', { celebrities: celebrities });
        })
        .catch(e => next(e))
});

router.get('/details/:id', (req, res, next) => {
    Celebrity.findById(req.params.id).populate('movies').populate('createdBy')
        .then(async celebrity => {
            celebrity.createdByMe = celebrity.createdBy ? celebrity.createdBy.equals(req.user) : false
            res.render('celebrities/show', { celebrity });
        })
        .catch(e => next(e))
});

router.get('/new', (req, res, next) => {
    if (!req.user) {
        req.flash('failure', 'Must be logged in to perform that action...')
        res.redirect('/login')
    }
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
    Celebrity.create({...req.body, createdBy: req.user.id })
        .then(celebrity => {
            celebrity.save()
            res.redirect('/celebrities')
        })
        .catch(e => res.redirect('/celebrities/new'))
});

module.exports = router;