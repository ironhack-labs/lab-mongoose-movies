const express = require('express');
const router = express.Router();


const Celebrity = require("../models/celebrity-model.js")

router.get('/celebrities', (req, res, next) => {

    Celebrity.find()
        .then(celebrityResults => {
            res.locals.celebrityArray = celebrityResults;
            res.render('celebrities/celebrities-list');
        })
        .catch(err => next(err));
});

router.get('/celebrities/new', (req, res, next) => {

    res.render("celebrities/new-celebrity.hbs")
});


router.post('/celebrities/process-new', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({ name, occupation, catchPhrase })
        .then(celebrityDoc => {
            res.redirect("/celebrities")
        })
        .catch(err => next(err));
});



router.get('/celebrities/:celebrityID/edit', (req, res, next) => {

    const { celebrityID } = req.params;

    Celebrity.findById(celebrityID)
        .then(celebrityDoc => {
            res.locals.CelebrityItem = celebrityDoc
            res.render("celebrities/edit-celebrity.hbs")

        })
        .catch(err => next(err));

});


router.get('/celebrities/:celebrityId', (req, res, next) => {
    const { celebrityId } = req.params;

    Celebrity.findById(celebrityId)
        .then(celebrityResults => {

            res.locals.celebrityItem = celebrityResults;

            res.render('celebrities/celebrities-details');
        })
        .catch(err => next(err));
});



router.post('/celebrities/:celebrityId/process-edit', (req, res, next) => {

    const { celebrityId } = req.params;

    const { name, occupation, catchPhrase } = req.body;

    Celebrity.findByIdAndUpdate(
            celebrityId, { $set: { name, occupation, catchPhrase } }, { runValidators: true }
        )
        .then(celebrityDoc => {
            res.redirect(`/celebrities/${celebrityId}`)
        })
        .catch(err => next(err));
});


router.post('/celebrities/:celebrityId/delete', (req, res, next) => {

    const { celebrityId } = req.params;

    Celebrity.findByIdAndRemove(celebrityId)
        .then(celebrityDoc => {
            res.redirect("/celebrities")
        })
        .catch(err => next(err));
});


module.exports = router;