const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities)
      res.locals.celebritiesList = celebrities;
      res.render("index");
    })
    .catch(err => {
      console.log("error")
      next(err);
    });
});

module.exports = router;