const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity")



//GET celebrities list page
router.get("/celebrities",(req, res, next) => {
    Celebrity
    .find().then(celebrities => (res.render('celebrities/index',{celebrities}))
    .catch(err => next()))
  });
  
  //GET Celebritirs info page
  router.get("/celebrities/:id",(req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findById(celebrityId)
    .then(celebrity => (res.render('celebrities/show',{celebrity}))
    .catch(err => next()))
  });
  
  //GET Create new celeb page
  router.get("/new",(req, res, next) => {
  res.render('celebrities/new')
  });
  
  //Create new Celebrity
  
  router.post('/celebrities', (req, res, next) => {
    let {name, occupation, catchPhrase} = req.body;
  
    Celebrity.create({name, occupation, catchPhrase})
        .then(data => {
            console.log('Celebrity Created!')
            res.redirect('/celebrities');
        })
        .catch(err => next())
  })
  
  //Delete Celebrity
  
  router.post('/celebrities/:id/delete', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findByIdAndRemove(celebrityId)
        .then(data => {
            console.log('Celebrity Deleted!')
            res.redirect('/celebrities');
        })
        .catch(err => next())
  })
  
  
  // Edit Celebrity
  
  router.get("/celebrities/:id/edit",(req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findById(celebrityId)
    .then(celebrity => (res.render('celebrities/edit',{celebrity}))
    .catch(err => next()))
  });
  
  router.post('/celebrities/:id/edit', (req, res, next) => {
    let celebrityId = req.params.id;
    let {name, occupation, catchPhrase} = req.body;
    Celebrity.findByIdAndUpdate(celebrityId,{name, occupation, catchPhrase})
        .then(data => {
            console.log('Celebrity Edited!')
            res.redirect('/celebrities');
        })
        .catch(err => next())
  })

  module.exports = router;