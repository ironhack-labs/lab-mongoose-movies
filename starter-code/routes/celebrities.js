const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((dbCelebrity) => {
      res.render("celebrities/index", {celebrities: dbCelebrity });
    })
    .catch((err) => next(err));
});

module.exports = router;