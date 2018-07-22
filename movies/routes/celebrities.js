const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

//shows all celebrities
router.get('/', (req, res, next) => {
    Celebrity.find({})
    .then(celebrities => {
        res.render('celebrities/index', {celebrities});
    })
    .catch(error => {
        next(error);
    })
});
//shows form to add new celebrity
router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

//process of adding a new celebrity. Then shows all celebrities
router.post('/', (req, res, next)=> {
    const {name, occupation, catchPhrase} = req.body;
    celebrity = new Celebrity({ name, occupation, catchPhrase });
    celebrity.save()
    .then(()=>{
        res.redirect('/celebrities');
    })
    .catch(error => {
        next(error);
    })
});

//shows celebrity details by id
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(celebrity => {
        res.render('celebrities/show', celebrity);
    })
    .catch(error => {
        // next(error);
        res.render('celebrities/new');
    })
});

//deletes a concrete celebrity
router.post('/:id/delete', (req,res,next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/celebrities');
    })
    .catch(error=>{
        next(error);
    })
});

//shows the form to edit a concrete celebrity
router.get('/:id/edit', (req, res, next) => {
    console.log('eeeeedit!!!!');
    Celebrity.findById(req.params.id)
    .then(((celebrity)=>{
        res.render('celebrities/edit', celebrity);
    }))
    .catch(error=>{
        next(error);
    })
});

//process of editing a celebrity. It shows the list of celebrities
router.post('/:id', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase})
    .then(() => {
        console.log("hola 1");
        res.redirect('/celebrities');
    })
    .catch(error => {
        console.log("hola 2");
        next(error);
    })
});

module.exports = router;