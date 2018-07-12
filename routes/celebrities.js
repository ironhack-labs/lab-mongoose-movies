const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/api/celebrities', (req, res, next)=>{
    Celebrity.find()
    .then((allTheCelebs)=>{
        res.json(allTheCelebs)
    })
    .catch((err)=>{
        next(err);
    })
})
//Show list of celebs
router.get('/celebrities', (req, res, next) => {

    res.render('celebrities/index');

});

//Show user the form
router.get('/celebrities/new', (req, res, next)=>{
    res.render('celebrities/new');
})

//Get info from form 
router.post('/celebrities/create', (req, res, next) => {
    const newCeleb = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    
    newCeleb.save()
    .then((response) => {
        res.redirect('/celebrities')
    })
    .catch((err) => {
        res.render('celebrities/new')
    })
});

//Show edit page
router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((theCeleb) => {
        res.render('celebrities/edit', {theCeleb})
    })
    .catch((err) => {
        next(err)
    })
});

//Get the new info from user
router.post('/celebrities/:id/update', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    .then((theCeleb) => {
        res.redirect(`/celebrities/${req.params.id}`)
    })
    .catch((err) => {
        next(err)
    })
});

//Delete Celebrities
 router.post('/celebrities/:id/delete', (req, res, next)=>{
     Celebrity.findByIdAndRemove(req.params.id)
     .then((reponse)=>{
         res.redirect('/celebrities');
     })
     .catch((err)=>{
         next(err);
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