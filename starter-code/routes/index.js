const express = require("express");
const router = express.Router();
const Celebrity = require("../Models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celeb => {
      console.log(celeb);
    })
    .next(error => {
      console.log("Error!");
    });
});
module.exports = router;
