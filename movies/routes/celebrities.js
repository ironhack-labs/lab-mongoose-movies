// Locate the /celebrities GET route in routes/celebrities.js.
// In the route callback:
// Call the Celebrity model's find method to retrieve all the celebrities.
// If there's an error, call the route's next function and return the error.
// If there isn't an error, render the celebrities/index view.
// Pass the array of celebrities into the view as a variable.

const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  console.log("holacaracola");
  Celebrity.find({}, (err, result) => {
    if (err) { return next(err) }
console.log(result);
    res.render('celebrities/index', {
      celebrities: result
    });
  });

});


module.exports = router;
