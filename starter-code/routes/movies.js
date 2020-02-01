const express = require("express");
const router = new express.Router();
const movieModel = require("../models/Movie");

router.get("/all", (req, res) => {
 
  movieModel
  .find()
  .then(movies => {
    res.render("movies", {
      movies
    });
  })
  .catch(dbErr => {
    console.log("OH NO ! Database error", dbErr);
  });
});


router.get("/new", (req, res) => {
  res.render("movies/new");
});

router.post("/new", (req, res) => {
  const {title, genre, plot} = req.body;
  movieModel
  .create({
    title,
    genre,
    plot,
  })
  .then(dbRes => res.redirect("/movies/all"),
  console.log('Movie added to the db!')
  )
  .catch(dbErr => {
    console.log(dbErr);
    redirect("/movies/new");
  });
});

//The dinamic url always goes after the statics ones.
router.get("/:id", (req,res) => {
  movieModel
  .findById(req.params.id)
  .then(movie => {
    res.render("movies/show",{movie});
  })
  .catch(dbErr => console.error("Oh no, db err:", dbErr))
});

router.post("/:id/delete", (req, res) => {
  movieModel
  .findByIdAndDelete(req.params.id)
  .then(dbRes => {
    res.redirect("/movies/all");
  })
  .catch (dbErr => {
    console.error(dbErr);
  });
});

router.get("/:id/edit", (req,res) => {
  movieModel
  .findById(req.params.id)
  .then(movie => {
    res.render("movies/edit", {movie});
  })
  .catch(dbErr => console.error(dbErr));
});

router.post("/:id", (req, res) => {
  const {title, genre, plot} = req.body;

  movieModel
  .findByIdAndUpdate(req.params.id, {
    title,
    genre,
    plot,
  })
  .then(dbRes => {
    res.redirect("/movies/all")
  })
  .catch(dbErr => {
    console.log(dbErr);
    res.render("/movies/edit");
  });
});

module.exports = router;