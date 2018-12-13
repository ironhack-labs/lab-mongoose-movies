const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.js");


router.get("/index", (req, res, next) => {
    Celebrity.find()
    .then(celebrities => {
        res.render("celebrities/index", celebrities);
      })
      .catch(err => next(err));
  });



module.exports = router;

