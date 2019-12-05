const express = require("express");
const router = express.Router();
const Celebrity = require("../Models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  // Display all of the celebrities
  Celebrity.find({})
    .then(data => {
      res.render("celebrities/index", { celebs: data });
    })
    .catch(err => {
      next.render("error", { error: err });
    });
});

module.exports = router;
