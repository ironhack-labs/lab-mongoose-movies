const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

//All celebrities
router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', { celebrities })
        })
        .catch(err => {
            next(err)
        })
})

router.post('/celebrities', (req, res, next) => {
    const newCelebrity = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
    });

    newCelebrity
        .save({})
        .then(celebrity => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            res.render('/celebrities/new', { celebrity })
        })
})

//Add new celebrity
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

router.post('/celebrities/edit', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;

    Celebrity
        .update({ _id: req.body.id }, { $set: { name, occupation, catchPhrase } })
        .then(celebrity => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            next(err)
        })
})

//Details celebrities
router.get('/celebrities/:id', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({ _id: celebrityId })
        .then(celebrity => {
            res.render('celebrities/show', { celebrity })
        })
        .catch(err => {
            next(err)
        })

})


//Edit
router.get('/celebrities/:id/edit', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity
        .findOne({ _id: celebrityId })
        .then(celebrity => {
            res.render('celebrities/edit', { celebrity })
        })
        .catch(err => {
            next(err)
        })
})


//Delete
router.post('/celebrities/:id/delete', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity
        .findByIdAndRemove({ _id: celebrityId })
        .then(celebrity => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;