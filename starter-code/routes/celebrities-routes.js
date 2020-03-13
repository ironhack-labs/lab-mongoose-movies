const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

// Iteration 2 Adding new celebrities
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new-celebrity');
});

// POST sending new celebrity to DB
router.post('/celebrities/create', (req, res, next) => {
    Celebrity.create(req.body)
    .then(newCelebrity => {
        console.log(newCelebrity);
        res.redirect('/celebrities');
    })
    .catch(err => {
        console.log(`An error has occured when adding a new celebrity to the DB: ${err}`);
        res.render('celebrities/new-celebrity');
    });
});

// Iteration 3 Listing our Celebrities
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebritiesFromDB => {
        console.log('Celebrities from DB: ', celebritiesFromDB);
        res.render('celebrities/celebrities', { celebrities: celebritiesFromDB });
    })
    .catch(err => console.log(err));
});

// Celebrities details page
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(theCelebrity => {
        console.log(`The celebrity: ${theCelebrity}`);
        res.render('celebrities/celebrity-details', { celebrity: theCelebrity });
    })
    .catch(err => console.log(`An error has occured when getting the movie details page: ${err}`));
});

module.exports = router;