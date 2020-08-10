const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

// listing movies
router.get("/movies", (req, res) => {
  Movie.find()
    .then((moviesFromDB) => {
      console.log("List of Celebrs from DB", moviesFromDB);
      res.render("movies/index", { mvovies: moviesFromDB });
    })
    .catch((err) => console.log(`Err while displaying mvovies : ${err}`));
});

// create a new  movie
router.get("/new-movie", (req, res) => {
  res.render("movies/new");
});

// enter details for new movie
router.post("/movies/new", (req, res) => {
  const { title, genre, plot } = req.body;
  console.log({ title, genre, plot });
  newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then((dataFromDB) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      res.render("movies/new");
      console.log(`Error while adding a new  movie : ${err}`);
    });
});

/**
 * To render and list  all the movies
 */
router.get("/movies/:movieId", (req, res) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movieDetails) => {
      console.log("celeb details from DB", movieDetails);
      res.render("movies/show", { movieInfo: movieDetails });
    })
    .catch((err) =>
      console.log(`Err while displaying post input page: ${err}`)
    );
});

/**
 *  Delete Movie
 */
router.post("/movies/:Id/delete", (req, res) => {
  const { Id } = req.params;
  // console.log(" delete entered ", Id);
  Movie.findByIdAndRemove(Id)
    .then(() => res.redirect("/movies"))
    .catch((error) => console.log(`Error while deleting Movies: ${error}`));
});

/**
Edit Movie
 */
router.get("/edit-movies/:Id", (req, res) => {
  const { Id } = req.params;
  // console.log(" edit entered ", Id);
  Movie.findOne({ _id: Id })
    .then((movieRecord) => {
      // console.log(movieRecord);
      res.render("movies/edit", movieRecord);
    })
    .catch((error) =>
      console.log(`Error while getting Movies details from DB: ${error}`)
    );
});

router.post("/movies/:movieId/edit", (req, res) => {
  const { movieId } = req.params;
  const { title, genre, plot } = req.body;
  console.log(" edit  entered ", { title, genre, plot });

  Movie.findByIdAndUpdate(movieId, { title, genre, plot }, { new: true })
    .then(() => res.redirect("/movies"))
    .catch((error) => console.log(`Error while editing Movie: ${error}`));
});

// export
module.exports = router;
