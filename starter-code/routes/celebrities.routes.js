const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res, next) =>{
    Celebrity.find()
    .then((celebrities) => {
        res.render('celebrities/index', {celebrities})
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({name, occupation, catchPhrase})
    .then(() => {
        console.log(`Created new celebrity`);
        res.redirect('/celebrities');
    })
    .catch((err)=> {console.log(err)});
});

router.get('/celebrities/:id', (req, res, next) =>{
    const {id} = req.params;
    Celebrity.findById(id)
    .then((celebrities) => {
        res.render('celebrities/show', {celebrities})
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    const {id} = req.params;
    Celebrity.findByIdAndRemove(id)
    .then(() => {
        res.redirect('/celebrities')
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

router.get('/celebrities/:id/edit', (req, res, next) =>{
    const {id} = req.params;
    Celebrity.findById(id)
    .then( celebrityToEdit => {
        res.render('celebrities/edit', celebrityToEdit);
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

router.post('/celebrities/:id/edit', (req, res, next) => {
    const {id} = req.params;
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase})
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

module.exports = router;
