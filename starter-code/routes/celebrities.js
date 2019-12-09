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
  // Gather the data from the form
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;

  // Create the object
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
    .then(response => {
      // Send the user back to the celebrities page
      res.redirect("/celebrities");
    })
    .catch(err => {
      // Render the error
      next.render("error", { error: err });
    });
});

// Delete from the database
router.post("/:id/delete", (req, res, next) => {
  // Delete the object
  Celebrity.findByIdAndRemove(req.params.id)
    .then(response => {
      // Send the user back to the celebrities page
      res.redirect("/celebrities");
    })
    .catch(err => {
      // Render the error
      next.render("error", { error: err });
    });
});

// Edit a new Celeb
router.get("/:id/edit", (req, res, next) => {
  // Search for all of the celebrities
  Celebrity.findById(req.params.id)
    .then(data => {
      // With that data, render the form to edit a celebrity
      res.render("celebrities/edit", { celeb: data });
    })
    .catch(err => {
      //  If an error is found, render the error page
      next.render("error", { error: err });
    });
});

// Update the database
router.post("/:id", (req, res, next) => {
  // Gather the data from the form
  let id = req.params.id;
  let update = { ...req.body };

  // Create the object
  Celebrity.findByIdAndUpdate(id, update, { new: true })
    .then(response => {
      // Send the user back to that celebrities page
      res.redirect("/celebrities/" + id);
    })
    .catch(err => {
      console.log(err);
      // Render the error
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
