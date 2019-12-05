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

// Add a new Celeb
router.get("/new", (req, res, next) => {
  // Search for all of the celebrities
  Celebrity.find({})
    .then(data => {
      // With that data, render the form for new celebrities
      res.render("celebrities/new", { celebs: data });
    })
    .catch(err => {
      //  If an error is found, render the error page
      next.render("error", { error: err });
    });
});

// Post to the database
router.post("/", (req, res, next) => {
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;

  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
    .then(response => {
      res.redirect("/celebrities");
    })
    .catch(err => {
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
