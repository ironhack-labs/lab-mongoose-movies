const express = require("express");
const router = new express.Router();
const movieModel = require("../models/Movie");

// const handleReadMovies = id => movieModel.find(id ? { _id: id } : {});

router.get("/create-movie", (req, res) => {
  res.render("form-movie");
});

router.post("/create-movie", (req, res) => {
  const { title, genre, plot } = req.body;
  // if some tests must be performed, do so before database query
  movieModel
    .create({
      title,
      genre,
      plot
    })
    .then(dbRes => res.redirect("/all-movies"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new movie !");
    });
});

router.get("/all-movies", (req, res) => {
  movieModel
    .find() // retreive all the documents in the movies collection
    .then(dbResults => {
      res.render("list-movie", {
        movies: dbResults
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

// :id is a request param... a variable
router.get("/movie/:id", (req, res) => {
  // console.log(req.params.id);
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render("page-movie", { movie });
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});

router.get("/admin/movies", (req, res) => {
  movieModel
    .find() // retreive all the documents in the movies collection
    .then(dbResults => {
      console.log(dbResults);
      res.render("admin-movies", {
        movies: dbResults
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/admin/movies/update/:id", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("form-movie-update", { movie: dbRes });
    })
    .catch(dbErr => console.error(dbErr));
});

router.post("/admin/movies/update/:id", (req, res) => {
  // console.log(req.params.id); // access vars declared in the route
  // console.log(req.body); // access the posted data
  const { title, genre, plot } = req.body;

  movieModel.findByIdAndUpdate(req.params.id, {
      title,
      genre,
      plot
  })
  .then(dbRes => {
    res.redirect("/admin/movies");
  })
  .catch(dbErr => {
    console.error(dbErr)
  });
});

router.get("/admin/movies/delete/:id", (req, res) => {
  movieModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/admin/movies");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

module.exports = router;
