const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

// Index - Show all celebrities
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebs => res.render('celebrities/index', {celebs}))
    .catch(error => console.log(error));
});

// New - Show form to add celebrity
router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});


// Create - Adds celebrity to DB
router.post('/', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    const newCeleb = new Celebrity({name, occupation, catchPhrase});
    newCeleb.save()
    .then(_ => res.redirect('/celebrities'))
    .catch(_ => res.render('celebrities/new'));
});

// Show more info about specific celebrity
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(celeb => res.render('celebrities/show', celeb))
    .catch(error => console.log(error));
});

// Delete - Delete a specific ceebrity
router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(_ => res.redirect('/celebrities'))
    .catch(error => console.log(error));
});

// Edit - Show form to edit info about specific celebrity
router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(celeb => res.render('celebrities/edit', celeb))
    .catch(error => console.log(error));
});

// Update - Update celebrity's info
router.post('/:id', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.update({_id: req.params.id}, {$set: {name, occupation, catchPhrase}})
    .then(_ => res.redirect('/celebrities'))
    .catch(error => console.log(error));
})



module.exports = router;