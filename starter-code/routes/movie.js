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

router.get('/new',  (req, res, next) => {
  res.render("movies/new.hbs");
});

router.post('/new', async (req, res, next) => {
try {
  const newMovie = req.body;
  const createdMovie= await Movie.create(newMovie);
  res.redirect("/movies");
} catch (error) {
  next(error);
}
});

router.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    console.log(movie);
    res.render("movies/show.hbs", { movie });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async(req, res, next) => {
  console.log("hey i'm in delete");
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
    .then((dbResult) => {
      res.redirect("/movies"); // Redirect to "/labels" after delete is successful
    })
    .catch((error) => {
      next(error); // Sends us to the error handler middleware in app.js if an error occurs
    });
});

router.get("/:id/edit", async (req, res) => {
  try {
  
    const movieEdit = await Movie.findById(req.params.id);
    // console.log(labelDocuments);
    res.render('movies/edit', { movie: movieEdit });
  } catch (error) {
    next(error);
  }
});

/*
  Create the /celebrities/:id/edit GET route in routes/celebrities.js.
  In that route's callback:
  Call the Celebrity model’s findOne or findById method to retrieve a specific celebrity by its id.
  If there's an error, call the route's next function and return the error.
  If there isn't an error, render the celebrities/edit view.
  Pass the variable with the celebrity’s details into the view.
  Create the edit.hbs view file inside the views/celebrities/ folder.
  In the views/celebrities/edit.hbs view file:
  Add an <h2> tag for the page's heading.
  Add a <form> tag that makes a POST request to /celebrities/:id with the :id replaced by the actual celebrity's id.
  Add <input> tags inside the form for each attirbute of the celebrity.
  Bonus: When you render the edit form, make sure each of the input fields is pre-filled with the current value of the attribute for that celebrity
  Add a <button> tag inside the form so that the user can submit the form once they are done editing.
  Locate the /celebrities/:id POST route in the routes/celebrities.js file.
  In that route's callback:
  Create an object with keys for each attribute of a celebrity (celebrity has 3 attributes. What were they again? Look back and review if you forgot.)
  Values for those keys should come from the form submission (req.body).
  Call the Celebrity model’s update method and use the celebrity's id to specify which celebrity we are updating. Also, use the object you just created with the updated attributes for the celebrity and pass this object into the update method as the second argument.
  If there is an error retrieving that celebrity, call the route's next function and return the error
  If there is no error, redirect back to the list of celebrities.
*/




module.exports = router;