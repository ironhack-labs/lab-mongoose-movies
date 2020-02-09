const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(celebrities => res.render('celebrities/index', {celebrities}))
      .catch(err => next(err))
  });

  router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
  });

  router.post('/celebrities', (req, res, next) => {
    const celebrity = new Celebrity({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    });
  
    celebrity.save()
      .then((celebrity) => {
        res.redirect('/celebrities');
      })
      .catch((err) => next(err));
  });

  router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id;
    
    Celebrity.findById(id)
    .then(celebrity => {
      console.log(celebrity)
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => next(err))
  });
  
  router.post('/celebrities/:id/delete', (req, res, next) => {
    const id = req.params.id;
    
    Celebrity.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .cath(err => next(err))
  });
  
  router.post('/celebrities/:id/edit', (req, res, next) => {
    const id = req.params.id;
    
    Celebrity.findById(id)
    .then(celebrity => res.render("celebrities/edit", { celebrity }))
    .catch(err => next(err))
  });
  
  router.post('/celebrities/:id', (req, res, next) => {
    const id = req.params.id;
    const {name, occupation, catchPhrase} = req.body;
  
    Celebrity.update({_id: id}, { $set: {name, occupation, catchPhrase}})
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch(err => next(err));
  });
  
  module.exports = router;