const express = require('express');
const router  = express.Router();
const movieModel=require("./../models/movie-model");

/* GET movies page */
router.get('/', (req, res, next) => {
  movieModel
  .find()
  .then(movies => {
    res.render('movies/index', {movies});
  })
  .catch(dbErr => {
    console.log("OH NO ! Database error", dbErr);
  });
});

//read one
router.get('/show/:id', (req, res, next) => {
  movieModel
  .findById(req.params.id)
  .then(movie => {
    console.log(movie)
    res.render('movies/show', {movie});
  })
  .catch(dbErr => {
    console.log("OH NO ! Database error", dbErr);
  });
});



//create

router.get("/new", (req, res) => {
  res.render("movies/new");
});

router.post("/", (req, res) => {
  const { title, genre, plot } = req.body;
  // if some tests must be performed, do so before database query
  movieModel
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



//kill
router.post("/show/:id/delete", (req, res) => {
  const { title, genre, plot } = req.body;
  // if some tests must be performed, do so before database query
  movieModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.redirect("/movies"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while deleting new movie !");
    });
});

//update

router.get("/show/:id/edit", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render("movies/update", {movie});
    })
    .catch(dbErr => console.error(dbErr));
});

router.post("/show/:id", (req, res) => {
  const { title, genre, plot } = req.body;
  // if some tests must be performed, do so before database query
  movieModel
    .findByIdAndUpdate(req.params.id, { title, genre, plot })
    .then(dbRes => res.redirect("/movies"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while updating new movies !");
    });
});


module.exports = router;
