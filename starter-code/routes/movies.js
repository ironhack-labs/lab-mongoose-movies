const express = require('express');
const router  = new express.Router();
const movies  = require('./../models/movie')

router.get("/", (req, res) => {
  movies
    .find()
    .then(dbRes => {
      res.render("all-movies", { movie: dbRes });
    })
    .catch(err => console.log(err));
});



router.get("/create-movie", (req, res) => {
  res.render("form-movie");
});



router.post("/create-movie", (req, res) => {
  const { title, genre, plot } = req.body;
  movies
    .create({
      title,
      genre,
      plot
    })
    .then(dbRes => res.redirect("/movies"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new movie !");
    });
});


router.get("/delete/:id", (req, res) => {
  movies
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/movies");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

router.get("/update/:id", (req, res) => {
  movies
    .findById(req.params.id)
    .then(dbRes => {
      res.render("form-movies-update", { movie: dbRes });
    })
    .catch(dbErr => console.error(dbErr));
});


router.post("/update/:id", (req, res) => {
  const { title, genre, plot } = req.body;

  movies.findByIdAndUpdate(req.params.id, {
    title,
    genre,
    plot
  })
  .then(dbRes => {
    res.redirect("/movies");
  })
  .catch(dbErr => {
    console.error(dbErr)
  });
});


router.get("/:id", (req, res) => {
  movies
    .findById(req.params.id)
    .then(dbRes => {
      res.render("showmovie", { movie: dbRes });
    })
    .catch(err => console.log(err));
});






module.exports = router;
