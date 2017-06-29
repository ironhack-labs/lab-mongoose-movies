// const mongoose = require ('mongoose');
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find((err, celebrityResults) => {
    if (err) {
      next(err);
      return;
    }
  res.render('celebrities/index.ejs',
  {celebrityList: celebrityResults}
);
});
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new.ejs');
});



router.get('/celebrities/:id/show', (req, res, next) => {
  Celebrity.findById(
     req.params.id,
    (err, celebrityResults) => {
    if (err) {
      next(err);
      return;
    }
  res.render('celebrities/show.ejs',
  {daCelebrity: celebrityResults}
);
});
});

router.post('/celebrities', (req, res, next) => {
  const newCelebrity = new Celebrity ({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityPhrase
  });
  newCelebrity.save((err) => {
    if (err) {
      res.render('celebrities/new.ejs');
    }
    res.redirect('/celebrities');
  });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
   Celebrity.findByIdAndRemove(
     req.params.id,
      (err) => {
       if (err) {
         next(err);
         return;
       }
       res.redirect('/celebrities');
     }
   );
 });

 router.get('/celebrities/:id/edit', (req, res, next) => {
    let id = req.params.id;
     Celebrity.findById(
       id,
       (err, celebrityResults) => {
        if (err) {
          next(err);
          return;
        }
        res.render('celebrities/edit.ejs', {daCelebrity: celebrityResults});
       }
     );
 });

 router.post('/celebrities/:id/update', (req, res, next) => {
   const editedCelebrity = {
     name: req.body.celebrityName,
     occupation: req.body.celebrityOccupation,
     catchPhrase: req.body.celebrityPhrase
   };
   Celebrity.findByIdAndUpdate(
     req.params.id,
     editedCelebrity,
     (err) => {
       if (err) {
         next(err);
         return;
       }
       res.redirect('/celebrities');
     }
   );
 });



module.exports = router;
