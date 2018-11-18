const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');


router.get('/celebrities', (req, res, next) => {
  debugger
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {      
      console.log(error);
      next(err);
    })  
});

module.exports = router;