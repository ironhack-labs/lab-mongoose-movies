const express = require("express");
const router = express.Router();
const Celebrity = require("../Models/Celebrity");

// Base Celebrity route
router.get("/", (req, res, next) => {
  // Search for all of the celebrities
  Celebrity.find({})
    .then(data => {
      // With that data, render the index page
      res.render("celebrities/index", { celebs: data });
    })
    .catch(err => {
      //  If an error is found, render the error page
      next.render("error", { error: err });
    });
});

// Celeb Details
router.get("/:id", (req, res, next) => {
  // Search for all of the celebrities
  Celebrity.findById(req.params.id)
    .then(data => {
      // With that data, render the index page
      res.render("celebrities/show", { celeb: data });
    })
    .catch(err => {
      //  If an error is found, render the error page
      next.render("error", { error: err });
    });
});

module.exports = router;
