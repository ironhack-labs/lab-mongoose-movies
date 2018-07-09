const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => res.render('celebrities/index', {celebrities}))
        .catch(err => next())
});

router.post('/', (req, res) => {
    const {name, occupation, catchPhrase} = req.body;

    Celebrity.create({name, occupation, catchPhrase})
        .then(data => {
            console.log('Celebrity Created!')
            res.redirect('/celebrities');
        })
        .catch(err => next())
})

router.get('/new', (req, res) => {
    res.render('celebrities/new');
})

router.post('/:id/delete', (req, res) => {
    const celebrityId = req.params.id;

    Celebrity.findByIdAndRemove(celebrityId)
        .then(data => {
            console.log('Celebrity Removed!')
            res.redirect('/celebrities');
        })
        .catch(err => next())
})

router.post('/:id/edit', (req, res) => {
    const celebrityId = req.params.id;

    Celebrity.findById(celebrityId)
    .then(celebrity => res.render('celebrities/edit', {celebrity}))
    .catch(err => next())
        
})

router.post('/:id', (req, res) => {
    const celebrityId = req.params.id;
    const {name, occupation, catchPhrase} = req.body;

    Celebrity.findByIdAndUpdate(celebrityId,{name, occupation, catchPhrase})
        .then(data => {
            console.log('Celebrity Updated!')
            res.redirect('/celebrities');
        })
        .catch(err => next())
})

router.get('/:id', (req, res, next) => {
    const celebrityId = req.params.id;

    Celebrity.findById(celebrityId)
        .then(celebrity => res.render('celebrities/show', {celebrity}))
        .catch(err => next())
});

module.exports = router;