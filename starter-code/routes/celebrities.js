const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// Locate the /celebrities GET route in routes/celebrities.js.
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
// In the route callback:
// Call the Celebrity model's find method to retrieve all the celebrities.
// If there isn't an error, render the celebrities/index view.
// Pass the array of celebrities into the view as a variable.

