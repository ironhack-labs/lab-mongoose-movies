/* jshint esversion: 9*/
const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

// GET ROUTS

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritiesFromDB => {
      res.render('celebrities', { allCelebrities: allCelebritiesFromDB });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/celebrities/new-celebrity', (req, res) => {
  res.render('celebrities/new-celebrity', {title: "Add A New Celebrity"});
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render('celebrities/celebrity-details', { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

// edit celebrity page
router.get('/celebrities/:id/edit',(req, res, next) => {
  const celebrityId = req.params.id;
  console.log('celebrityid', celebrityId);
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render('celebrities/edit-celebrity', {
        title: `Edit ${celebrity.name}`,
        celebrity: celebrity
      });
    }).catch(error => {
      next(error);
    });
});

// POST ROUTS

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new Celebrity({name, occupation, catchPhrase});

  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

// delete celebrity
router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      next(error);
    });
});

// update celebrity
router.post('/celebrities/:id', (req, res, next) => {
  console.log('body from data:', req.body);
  // const { name, occupation, catchPhrase } = req.body;
  let updatedCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };
  console.log('updatedCelebrity:', updatedCelebrity);

  
  const celebrityId = {_id: req.params.id};
  Celebrity.updateOne(celebrityId, { $set: updatedCelebrity/* { name, occupation, catchPhrase } */ } )
    .then(() => {
      res.redirect('/celebrities');
    });

  console.log('new body log:', req.body);
});

module.exports = router;