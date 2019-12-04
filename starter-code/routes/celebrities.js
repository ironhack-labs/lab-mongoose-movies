const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// Locate the /celebrities GET route in routes/celebrities.js.
router.get("/", (req, res, next) => {
  // In the route callback:
  // Call the Celebrity model's find method to retrieve all the celebrities.
  Celebrity.find()
    // If there isn't an error, render the celebrities/index view.
    // Pass the array of celebrities into the view as a variable.
    .then(celebrities => {
      res.render("celebrities", { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/new", (req, res, next) => {
  // Render the celebrities/new view.
  res.render("celebrities/new");
});

// Locate the /celebrities post route in routes/celebrities.js.
router.post("/", (req, res, next) => {
  // Create an object with keys for name, occupation, and catchPhrase.
  // Values for those keys should come from the form (req.body is the object full of the values from the form)
  let newName = req.body.name;
  let newOccupation = req.body.occupation;
  let newCatchPhrase = req.body.catchPhrase;

  // Call the save method to save the new celebrity to the database

  // Create an instance of the Celebrity model with the object you made in the previous step
  Celebrity.create({
    name: newName,
    occupation: newOccupation,
    catchPhrase: newCatchPhrase
  })
    // If there is no error, redirect to the page with the list of celebrities
    .then(result => {
      res.redirect("/celebrities");
    })
    // If there is an error, render the celebrities/new view so the user can try again.
    .catch(err => {
      next(err);
    });
});

router.post("/delete/:id", (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  Celebrity.findByIdAndRemove(id)
    .then(result => {
      console.log("deleted");
      res.redirect("/celebrities/");
    })
    .catch(error => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  // Call the Celebrity model's findOne or findById method to retrieve the details of a specific celebrity by its id.
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity);
      //   res.render("the file",{data which is passed to the file})
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
