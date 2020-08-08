const express = require("express");
const router = express.Router();
const Celebrity = require("../Models/Celebrity");
const celebs = require("../bin/seeds");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celeb => {
      console.log(celeb);
    })

    .next(error => {
      console.log("Error!");
    });
  res.render("celebrities/index");
});
module.exports = router;
