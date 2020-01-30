const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/Celebrity.js');

/* /celebrities/index page */
router.get('/index', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', {celebrities});
    })
    .catch(error => {
      console.log("There was an error retrieving the celebrities : ", error);
      next();
    })
});

/* /celebrities/:id page */
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', {celebrity});
    })
    .catch(error => {
      console.log("There was an error retrieving the celebrity : ", error);
      next();
    })
});

module.exports = router;
