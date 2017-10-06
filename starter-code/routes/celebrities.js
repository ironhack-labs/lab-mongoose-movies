const mongoose = require('mongoose');
const express = require('express');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movies');
const celebrityRoutes = express.Router();

// router.get('/', (req, res, next) =>{
//
//   Celebrities.find({}, (err, products) => {
//   if(err) {return next(err)}
//   res.render('celebrities/index', {
//     celebrities: celebrities
//     });
//   });
// });

celebrityRoutes.get('/', (req, res, next) => {

Celebrity.find({}, (err, celebrity) => {
    if (err) { return next(err) }
    res.render('celebrities/index', {
      celebrity: celebrity
    });
  });
});

celebrityRoutes.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

celebrityRoutes.post('/', (req, res, next) => {
  const celebrityInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
      imageUrl: req.body.imageUrl,
  };
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save( (err) => {
    if (err) {
          return res.render('celebrities/new', { errors: newCelebrity.errors });
        }    // redirect to the list of products if it saves
    return res.redirect('/celebrities');
  });
});

celebrityRoutes.get('/:id', (req, res, next) => {
   const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
     if (err) { return next(err); }
     res.render('celebrities/show', {celebrity: celebrity});
   });
 });

 celebrityRoutes.post('/:id/delete', (req, res, next) => {
   const celebrityId = req.params.id;

   Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
     if (err){ return next(err); }
     return res.redirect('/celebrities');
   });
 });

 celebrityRoutes.get('/:id/edit', (req, res, next) => {
   const celebrityId = req.params.id;

   Celebrity.findById(celebrityId, (err, celebrity) => {
     if (err) {return next(err); }
     res.render('celebrities/edit', {celebrity: celebrity});
   })
 })

 celebrityRoutes.post('/:id', (req, res, next) => {
   const celebrityId = req.params.id;

   /*
    * Create a new object with all of the information from the request body.
    * This correlates directly with the schema of Product
    */
   const updates = {
       name: req.body.name,
       occupation: req.body.occupation,
       catchPhrase: req.body.catchPhrase,
   };

   Celebrity.findByIdAndUpdate(celebrityId, updates, (err, product) => {
     if (err){ return next(err); }
     return res.redirect('/celebrities');
   });
 });



module.exports = celebrityRoutes;
