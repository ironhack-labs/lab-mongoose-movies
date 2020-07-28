const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity');
const { Router } = require('express');

router.get('/celebrities', (req, res, next) =>{
  Celebrity.find()
  .then(allTheCelebritiesFromDB => {
    res.render('./celebrities/index', {celebrities: allTheCelebritiesFromDB});
  })
  .catch(error => {
    console.log('Error while getting the celebrities from the DB: ', error);
  })
});

//Poner celebridades

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
      .then((celebrity) => {
          res.redirect('/celebrities');
      })
      .catch(error => {
          console.log('Error:', error);
      });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
      .then(allTheCelebritiesFromDB => {
          console.log(allTheCelebritiesFromDB);
          res.render('celebrities/show', {allTheCelebritiesFromDB});
      })
      .catch(error => {
          console.log('Error retrieving id:', error);
      });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
      .then(() => {
          res.redirect('/celebrities');
      })
      .catch(error => {
          console.log('Error:', error);
      });

    });



module.exports = router;