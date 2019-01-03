const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/:celebId", (req, res) => {
  Celebrity.find({
    _id: req.params.celebId
  })
    .then(celebrities => {
      res.render("celebrities/show", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
