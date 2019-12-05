const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// display all movies
router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      next(error);
    });
});

// render page with the form on it
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

// send the data to after the form is filled out.
router.post("/", (req, res, next) => {
  let newTitle = req.body.title;
  let newGenre = req.body.genre;
  let newPlot = req.body.plot;

  Movie.create({
    title: newTitle,
    genre: newGenre,
    plot: newPlot
  })
    .then(result => {
      res.redirect("/movies");
    })
    .catch(err => {
      next(err);
    });
});

// detail page
router.get("/:id", (req, res, next) => {
  // Call the Movie model's findOne or findById method to retrieve the details of a specific movie by its id.
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      //   res.render("the file",{data which is passed to the file})
      res.render("movies/show", { movie });
    })
    .catch(error => {
      next(error);
    });
});

// delete item
router.post("/delete/:id", (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  // Use a databse query to retrieve the Movie that was just clicked, and delete it from the database.
  Movie.findByIdAndRemove(id)
    .then(result => {
      console.log("deleted");
      res.redirect("/movies");
    })
    .catch(error => {
      next(error);
    });
});

// display a edit form
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  // Call the Movie model’s findOne or findById method to retrieve a specific movie by its id.
  Movie.findById(id)
    .then(movie => {
      res.render("movies/edit", { movie });
    })
    .catch(error => {
      next(error);
    });
});

// receive the edited data from that form.
router.post("/update/:id", (req, res, next) => {
  let id = req.params.id;

  // this stupid {new:true} thing is so that after we edit the movie, the response we get back shows us the new info instead of the old info, not sure why this isnt the default
  Movie.findByIdAndUpdate(id, update, { new: true })
    .then(response => {
      console.log(response);
      res.redirect("/movies/" + id);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
