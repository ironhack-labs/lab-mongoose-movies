const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', { celebrities });
        })
        .catch(console.error);
});

router.get('/details/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/show', { celebrity });
        })
        .catch(console.error);
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/', (req, res) => {
    const { name, occupation, catchPhrase } = req.body;

    new Celebrity({
        name,
        occupation,
        catchPhrase
    })
        .save()
        .then(celebrity => {
            res.redirect('celebrities');
        })
        .catch(error => {
            res.render('celebrities/new');
        });
});

router.post('/:id/delete', (req, res) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(result => {
            res.redirect('/celebrities');
        })
        .catch(console.error);
});

router.get('/details/:id/edit', (req, res) => {
    const { id } = req.params;
    Celebrity.findById(id)
        .then(celebrity => {
            res.render('celebrities/edit', { celebrity });
        })
        .catch(console.error);
});

router.post('/details/:id', (req, res) => {
    const { id } = req.params;

    const { name, occupation, catchPhrase } = req.body;

    Celebrity.findByIdAndUpdate(
        id,
        {
            name,
            occupation,
            catchPhrase
        },
        { new: true }
    )
        .then(celebrity => {
            res.render('celebrities/show', { celebrity, updated: true });
        })
        .catch(console.error);
});

module.exports = router;
