const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')
const { userAuth } = require('../middleware/auth')

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
            celebrity.createdByMe = (req.user && req.user.role === 'Admin') ? true : celebrity.createdBy ? celebrity.createdBy.equals(req.user) : false
            res.render('celebrities/show', { celebrity });
        })
        .catch(e => next(e))
});

router.get('/new', userAuth, (req, res, next) => {
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