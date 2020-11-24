const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.model');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((celebritiesFromDB) => {
            res.render('celebrities/index', {
                celebritiesFromDB
            });
        })
        .catch((error) => next(error));
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
    Celebrity.create(req.body)
        .then((celebrityFromDB) => {
            res.redirect('/celebrities');
        })
        .catch((error) => {
            res.redirect('/celebrities/new');
            console.log(`Could not add the celebrity due to an error: ${error}`);
        });
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((celebrityFromDB) => {
            res.render('celebrities/show', {
                celebrityFromDB
            });
        })
        .catch((error) => next(error));
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch((error) => next(error));
});

router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((celebrityFromDB) => {
            res.render('celebrities/edit', celebrityFromDB);
        })
        .catch((error) => next(error));
});

router.post('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch((error) => next(error));
});

module.exports = router;