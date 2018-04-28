const express = require('express');
const router  = express.Router();
const mongoose     = require('mongoose');
const Celebrity = require('../models/celebrity.js');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("./celebrities", {celebrities});
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/celebrities/new', (req, res, next) => {
      res.render("./celebrities/new");
});

router.post('/celebrities', (req, res, next) => {
  let newCelebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })

  newCelebrity.save()
    .then(celebrities => {
      res.redirect("./celebrities");
    })
    .catch(error => {
      console.log(error);
      res.render("./celebrities/new");
    })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.params.id})
    .then(celebrities => {      
      res.redirect("/celebrities");      
    })
    .catch(error => {
      console.log(error);
    })
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById({_id: req.params.id})
    .then(celebrities => {
      
        res.render("./celebrities/edit", {celebrities});
   
    })
    .catch(error => {
      console.log(error);
    })
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById({_id: req.params.id})
    .then(celebrities => {
      res.render("./celebrities/show", {celebrities});
    })
    .catch(error => {
      console.log(error)
    })
});

router.post('/celebrities/:id', (req, res, next) => {
  let updatedCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }

  Celebrity.findByIdAndUpdate( req.params.id, {$set: updatedCelebrity})
    .then(celebrities => {
        res.redirect("./");
    })
    .catch(error => {
      console.log(error);
    })
});

module.exports = router;