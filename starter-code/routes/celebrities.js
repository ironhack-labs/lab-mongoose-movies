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
