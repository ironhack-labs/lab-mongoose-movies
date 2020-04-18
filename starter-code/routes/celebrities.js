const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

/* GET show all celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritiesFromDB => {
      // console.log('All Celebrities: ', allCelebritiesFromDB);
      res.render('celebrities', {celebrities: allCelebritiesFromDB});
    })
    .catch(next);
});


/* GET celebrities ID */
router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then(celebrityFromDB => {
      res.render('celebrities/show', {celebrity: celebrityFromDB});
    })
    .catch(next);
});

module.exports = router;
