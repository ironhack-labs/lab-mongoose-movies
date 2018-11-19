const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
      .then(list => {
        res.render('celebrities/index', {list});
      })
      .catch(err => {
        res.redirect('/index')
      });
  });
  
  router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrity => {
        res.render('celebrities/celebrity', {celebrity});
      })
      .catch(err => next(err));
  });
  
  router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
  });
  
  router.post('/new', (req, res, next) => {
  
    let celebrity = new Celebrity();
    celebrity.name = req.body.name;
    celebrity.occupation = req.body.occupation;
    celebrity.catchPhrase = req.body.catchPhrase;
  
    celebrity.save()
      .then(() => {
        res.redirect('/celebrities')
      })
      .catch(() => {
        res.redirect('/celebrities/new')
      });
  
  });
  
  router.post('/celebrities/:id/delete', (req, res, next) => {
  
    Celebrity.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect('/celebrities')
      })
      .catch(err => next(err));
  
  });

  router.get('/edit/:id', (req, res, next) => {
    Celebrity.findById(req.params.id )
    .then(celebrity =>{
      res.render('celebrities/edit',{celebrity});
    });
  });
  
  router.post('/edit/:id', (req, res, next) => {
    let modifiedCelebrity = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
    console.log('pasa por el post')
    Celebrity.update({ _id: req.params.id }, { $set: {modifiedCelebrity} })
    .then(()=>{
      console.log('Pasa por update');
      res.redirect('/celebrities');
    })
    .catch(()=>{
      console.log('No updatea en Mongo');
    });  
  });

  module.exports = router;