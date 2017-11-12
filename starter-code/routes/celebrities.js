'use strict';

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

// --- GET celebrities list --- //
router.get('/celebrities', function(req, res, next) {
    Celebrity.find({}, (err, celebrities) => {
        if (err) {
            return next(err);
        }
        const data = {
            celebrities: celebrities
        };
        res.render("celebrities/index", data);
    });
});

// --- GET render new celebrity form --- //
router.get('/celebrities/new', function(req, res) {
    res.render('celebrities/new');
});

// --- GET celebrity by id --- //
router.get('/celebrities/:id', function(req, res, next) {
    let celebrityId = req.params.id;

    Celebrity.findById(celebrityId, (err, celebrity) => {
        if (err) {
            return next(err);
        }
        const data = {
            celebrity: celebrity
        };
        res.render('celebrities/show', data);
    });
});

// --- POST add new celebrity --- //
router.post('/celebrities', function(req, res) {
    // pick the user inputs
    const celebrityInfo = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };

    // create new instance of Celebrity with the user inputs
    const newCelebrity = new Celebrity(celebrityInfo);

    // save that new celebrity to the DB. If error, render again the form
    newCelebrity.save((err) => {
        res.render('celebrities/new');
    });

    // If not, redirect to /celebrities, which is the celebrities list
    return res.redirect('/celebrities');
});

// --- POST remove celebrity --- //
router.post('/celebrities/:id/delete', function(req, res, next) {
    let celebrityId = req.params.id;

    Celebrity.findByIdAndRemove(celebrityId, (err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/celebrities');
    });
});

// --- GET edit celebrity --- //
router.get('/celebrities/:id/edit', function(req, res, next) {
    let celebrityId = req.params.id;

    Celebrity.findById(celebrityId, (err, celebrity) => {
        if (err) {
            return next(err);
        }
        const data = {
            celebrity: celebrity
        };
        res.render('celebrities/edit', data);
    });
});

// --- POST celebrity id --- //
router.post('/celebrities/:id', function(req, res, next) {
    let celebrityId = req.params.id;

    // pick the user inputs
    const celebrityInfo = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };

    Celebrity.findByIdAndUpdate(celebrityId, celebrityInfo, (err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/celebrities');
    });
});

module.exports = router;
