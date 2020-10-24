
//ITERATION 2
const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js'); //importamos celebrity de la colección

//ITERATION 3

router.get('/', (req, res, next) => {
    Celebrity.find()
      .then(allTheCelebritiesFromDB => {
        console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
        res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB });
      })
      .catch(error => {
        next()
        console.log('Error while getting the celebrities from the DB: ', error);
      })
  });

//ITERATION 3

  router.get('/:celebrityId', (req, res, next) =>  {
    Celebrity.findById(req.params.celebrityId)
    .then(theCelebrity => {
      res.render('celebrities/show', { celebrity: theCelebrity });
    })
    .catch(error => {
      next()
      console.log('Error while retrieving celebrity details: ', error);
    })
});

//ITERATION 4




module.exports = router;