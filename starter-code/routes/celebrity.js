const express = require('express');
const router  = express.Router();
const CelebrityModel = require('../models/celebrity.js');

router.get('/celebrities', (req, res, next) => {
  CelebrityModel.find().exec().then(results => {
    res.locals.celebs = results;
    res.render('celebrities/');
  }).catch(error => {
    next(error);
  });
});


router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  CelebrityModel.findById(req.params.id).then(celebFromDb => {
    res.locals.celeb = celebFromDb;
    res.render('celebrities/show');
  }).catch(error => {
    next(error);
  });
});

router.post('/celebrities', (req, res, next) => {
  const newCeleb = new CelebrityModel({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.celebCatchPhrase
  });
  newCeleb.save().then(()=> {
    res.redirect('/celebrities');
  }).catch(error => {
    if(newCeleb.errors){
      res.locals.validationErrors = newCeleb.errors;
      res.render('celebrities/new');
    }else{
      next(error);
    }
  });
});


router.post('/celebrities/:id/delete', (req, res, next) =>{
  CelebrityModel.findByIdAndRemove(req.params.id).then(removed => {
    res.redirect('/celebrities');
  }).catch(error =>{
    next(error);
  });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  CelebrityModel.findById(req.params.id).then(results => {
    res.locals.celeb = results;
    res.render('celebrities/edit');
  }).catch(error => {
    next(error);
  });
});

router.post('/celebrities/:id', (req, res, next) =>{
  CelebrityModel.findById(req.params.id).then(celebToUpdate => {
    celebToUpdate.set({
      name: req.body.celebName,
      occupation: req.body.celebOccupation,
      catchPhrase: req.body.celebCatchPhrase
    });
    return celebToUpdate.save();
  }).then(() =>{
    res.redirect(`/celebrities/${req.params.id}`);
  }).catch(error => {
    next(error);
    });
});

module.exports = router;
