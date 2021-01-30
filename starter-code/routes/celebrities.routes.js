const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

//Path to list celebrities
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebsFound => res.render('celebrities/index', {celebrities: celebsFound}))
        .catch(err => next(err))
})

// Create New Celebrity
router.get('/celebrities/celebrityForm', (req, res, next) => res.render('celebrities/celebrityForm'))
router.post('/celebrities/celebrityForm', (req, res) => {
    const newCelebrity = new Celebrity(req.body)
    newCelebrity.save()
        .then(user => {
            res.redirect('/celebrities')
            console.log(`The celebrity ${user.name} was added`);
        })
        .catch(err => {
            console.log(`An error occurred while creating the new celebrity: ${err}`)
            res.redirect('/celebrities/celebrityForm');
            //next(err);
        });
})

// Celebrity detail
router.get('/celebrities/:id', (req, res, next) => {
     Celebrity.findById(req.params.id) 
        .then(celebrityFound => res.render('celebrities/show', celebrityFound))
        .catch(err => next(err));
})

// Remove celebrity
router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => next(err));
})

// Edit celebrity
router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(foundCeleb => res.render('celebrities/celebrityForm', foundCeleb))
        .catch(err => next(err));
})
router.post('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(() => res.redirect('/celebrities'))
        .catch(err => next(err));
})

module.exports = router;