const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie");

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find({})
    res.render("movies/index.hbs", { movies });
  } catch (error) {
    next(error);
  }


});


/*

Locate the /celebrities GET route in routes/celebrities.js.
In the route callback:
Call the Celebrity model's find method to retrieve all the celebrities.
If there's an error, call the route's next function and return the error.
If there isn't an error, render the celebrities/index view.
Pass the array of celebrities into the view as a variable.
Create the celebrities/ folder inside views/.
Create the index.hbs view file inside the views/celebrities/ folder.
In the views/celebrities/index.hbs view file:
Add an <h2> tag for the page's heading.
Use a forEach loop to display tags with each celebrity's name.
In the views/index.hbs (homepage) file:
Add a link that goes to the /celebrities route.

*/


module.exports = router;