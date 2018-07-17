const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities/index', (req, res, next) => {
    Celebrity.find()
    .then((listOfCelebs) => {
        res.render('celebrities/index', {celebsArray: listOfCelebs});
    })
    .catch((err) => {
        next(err);
    })
});

router.get('/celebrities/new', (req, res, next)=>{
    res.render('celebrities/new');
})

router.post('/celebrities/create', (req, res, next) => {
    const newCeleb = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    
    newCeleb.save()
    .then((response) => {
        res.redirect('/celebrities/index')
    })
    .catch((err) => {
        res.render('/celebrities/new')
    })
});

router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((theCeleb) => {
        res.render('celebrities/edit', {theCeleb})
    })
    .catch((err) => {
        next(err)
    })
});

router.post('/celebrities/:id/delete', (req, res, next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then((reponse)=>{
        res.redirect('/celebrities/index');
    })
    .catch((err)=>{
        next(err);
    })
 });

 router.post('/celebrities/:id/update', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    .then((theCeleb) => {
        res.redirect('/celebrities/index')
    })
    .catch((err) => {
        next(err)
    })
});
 
router.get('/celebrities/:id', (req, res, next) => {
    const theID = req.params.id;
    Celebrity.findById(theID)
    .then((theCeleb)=>{
        res.render('celebrities/show', {celeb: theCeleb})
    })
    .catch((err) => {
        res.send(err)
    })
});

module.exports = router;