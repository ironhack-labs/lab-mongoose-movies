const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')
// Endpoints
router.get('/', (req, res) => {
    Celebrity
        .find()
        .then(allCelebs => res.render('celebrities/index', {allCelebs}))
        .catch(err => console.log(err))
});

router.get('/:celebId', (req,res) => {
    Celebrity
        .findById(req.params.celebId)
        .then(celebInfo => res.render('celebrities/show', {celebInfo}))
        .catch(err => console.log(err))
});

router.get('/new', (req,res) => res.render('celebrities/new'));

router.post('/', (req,res) => {
    const {name, occupation, catchPhrase} = req.body
    if(!name || !occupation || !catchPhrase) {
        res.render('celebrities/new', {errorMsg: 'Please fill in all the information'})
        return
    }
    Celebrity
        .create({name, occupation, catchPhrase})
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
});
/*
router.post('/:celebId/delete', (req,res) => {
    Celebrity
        .findByIdAndRemove(req.query.celebId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
});

router.get('/:celebId/edit', (req,res) => {
    Celebrity
        .findById(req.params.celebId)
        .then(editCeleb => res.render('celebrities/edit', {editCeleb}))
        .catch(err => console.log(err))
});

router.post('/:celebId', (req,res) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity
        .findByIdAndUpdate(req.params.celebId, {name, occupation, catchPhrase})
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
});

*/
module.exports = router