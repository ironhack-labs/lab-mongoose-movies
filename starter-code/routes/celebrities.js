const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/Celebrity.js');

/* GET home page */
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

module.exports = router;
