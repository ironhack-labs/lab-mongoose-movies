const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebritiesFromDB => {
        res.render('celebrities/index', {celebritiesFromDB});
    })
    .catch(error => {
        next(error);
    });
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
    Celebrity.findById(req.params.celebrityId)
    .then(celebrity => {
        res.render('celebrities/show', {celebrity});
    })
    .catch(error => {
        next(error);
    });
});

router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch(() => {
        res.render('celebrities/new');
        window.alert('There was an eror while creating your celebrity. Please try again.')
    });
});

router.post('/celebrities/:celebrityId/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.celebrityId)
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch(error => {
        next(error);
    });
});

router.get('/celebrities/:celebrityId/edit', (req, res, next) => {
    Celebrity.findById(req.params.celebrityId)
    .then(celebrity => {
        res.render('celebrities/edit', {celebrity});
    })
    .catch(error => {
        next(error);
    });
});

router.post('/celebrities/:celebrityId', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.celebrityId, req.body, {new: true})
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch(error => {
        next(error);
    });
});

module.exports = router;