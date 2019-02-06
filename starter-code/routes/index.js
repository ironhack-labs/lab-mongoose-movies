const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity-model.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("celebrities/index.hbs");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityResults => {
      res.locals.celebrityArray = celebrityResults;
      res.render("celebrities/index.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;

// router.get("/celebrities/:id", (req, res, next) => {
//   Celebrity.
