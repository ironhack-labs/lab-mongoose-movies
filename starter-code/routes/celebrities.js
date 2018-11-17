const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error)
    }) 
});


module.exports = router;