const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");


//GET celebrities
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(celebrities => {
        res.render("celebrities/index", {celebrities});
      })
      .catch(error => {
        console.log(error)
    })
  });

module.exports = router;
