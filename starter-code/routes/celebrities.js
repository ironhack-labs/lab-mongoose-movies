const { Router } = require('express');

var express = require('express');
var router = express.Router();

// here we're importing the celebrity model that we defined and exported in ../models/celebrity.js
const Celebrity = require('../models/celebrity');

// Iteration #2 - Listing our celebrities

console.log("I'm before celebrities...");

router.get('/celebrities', function(req, res, next) {
    console.log("I'm within celebrities...");
    Celebrity.find()
    .then(celebrities => res.render('celebrities/index', {celebrities: celebrities}))
    //.then(celebrities => console.log("Obj celebrities: ", celebrities))
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    });
  });

// Iteration #4 - Adding new celebrities

router.get('/celebrities/new', function (req, res, next) {
  console.log("I'm within celebrities new rendering the hbs");
  res.render('celebrities/new');
});

router.post('/celebrities/new', function (req, res, next) {
  console.log("I'm within celebrities new before saving the new celebrity");
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity ({name, occupation, catchPhrase});
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log('Something was wrong: ', error);
    res.render('celebrities/new');
  });
});

//  Iteration #3 - The celebrity details page

router.get('/celebrities/:id', function (req, res, next) {
  console.log("I'm within celebrities Id");
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/show', {celebrity: celebrity}))
  .catch(error => {
    console.log('Error while getting the celebrity by Id from the DB: ', error);
  });
}); 

// Iteration #5 - Deleting celebrities

router.post('/celebrities/:id/delete', function (req, res, next) {
  console.log("I'm within deleting celebrities");
  Celebrity.findByIdAndRemove(req.params.id)    
  .then((celebrity) => {
    res.redirect('/celebrities')})
  .catch(error => {
    console.log('Error deleting the celebrity by Id from the DB: ', error);
  });
});

// Iteration #6 - Editing celebrities

router.post('/celebrities', function (req ,res, next) {
  const {name, occupation, catchPhrase} = req.body;
  console.log("I'm updating the celebrity data");
  Celebrity.update({_id: req.query.id}, { $set: { name: name, occupation: occupation, catchPhrase: catchPhrase } }, { new: true })
  .then(celebrity => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log('Error updating the book: ', error);
  });
});

router.get('/celebrities/:id/edit', function (req, res, next) {
  console.log("I'm within editing a celebrity");
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render('celebrities/edit', {celebrity: celebrity})})
  .catch(error => {
    console.log('Error finding the celebrity id to edit it', error);
  });
});

module.exports = router;