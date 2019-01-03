const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    res.render("celebrities", { celebritiesArray: celebrities });
  });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id }).then(celebrity => {
    res.render("celebrities/show", { celebrity: celebrity });
  });
});
module.exports = router;
