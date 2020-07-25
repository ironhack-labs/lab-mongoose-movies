const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

//Iteration #2
router.get('/celebrities', (req, res, next) => {
    Celebrity
      .find()
      .then((allTheCelebritiesFromDB) => {
        console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
        res.render('celebrities/index', {allTheCelebritiesFromDB});
      })
      .catch(error => {
        console.log('Error while getting the celebrities from the DB: ', error);
      })
  });

//Iteration #4
router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new");
});

router.post('/celebrities/new', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase })

  newCeleb
    .save()
    .then((celeb) => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
      res.render("celebrities/new");
    });
});

//Iteration #5
router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity
    .findByIdAndRemove(req.params.id)
    .then(theCelebrity => {
      //console.log("hey")
      res.render('celebrities/show', { theCelebrity });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
    })
});

//Iteration #6
router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then(celebEdit => {
      //console.log("hey")
      res.render('celebrities/edit', { celebEdit });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
    })
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity
    .update(
      { _id: req.query.celebriy_id },
      { $set: { name, occupation, catchPhrase } },
      { new: true }
    )
    .then((celebrity) => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
    })
})

//Iteration #3
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then(theCelebrity => {
      //console.log("hey")
      res.render('celebrities/show', { theCelebrity });
    })
    .catch(error => {
      console.log('Error while retrieving celebrity details: ', error);
    })
});


module.exports = router;