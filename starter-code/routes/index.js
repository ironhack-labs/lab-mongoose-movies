const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities/index", { celebrityArray: celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.celebrityId })
    .then(document => {
      res.render("celebrities/show", { celebrity: document });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
