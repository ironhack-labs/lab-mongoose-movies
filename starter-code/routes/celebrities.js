const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity");


router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrity => {
            res.render('celebrities/index', {
                celebrities: celebrity
            });
        });
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
    Celebrity.create({
        name: req.body.name.trim(),
        occupation: req.body.occupation.trim(),
        catchPhrase: req.body.catchPhrase.trim()
    })
        .then(() => {
            res.redirect('/celebrities');
        });
});

router.get('/celebrities/:id/', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/show', { celebrity });
        });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/edit', { celebrity });
        });
});

router.post('/celebrities/:id/', (req, res, next) => {
    Celebrity.findByIdAndUpdate(
        req.body.id,
        {
            name: req.body.name.trim(),
            occupation: req.body.occupation.trim(),
            catchPhrase: req.body.catchPhrase.trim()
        },
        { new: true }
    )
        .then(() => {
            res.redirect('/celebrities');
        });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/celebrities');
        });
});

module.exports = router;