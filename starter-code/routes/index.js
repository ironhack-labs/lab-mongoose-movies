const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//CELEBRITIES
//page showing all celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrityArray: celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

//page to add new celebrity
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

//get information from form, add new celebrity to db, reload celebrities page
router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new Celebrity({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  });
  newCelebrity.save().then(() => {
    res.redirect("/celebrities");
  });
});

//get id of celebrity that is clicked to be deleted, delete it and reload celebrities
router.post("/celebrities/:celebrityId/delete", (req, res, next) => {
  Celebrity.findOneAndRemove({ _id: req.params.celebrityId })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => console.log(error));
});

//find celebrity to be edited and open edit form page
router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.celebrityId })
    .then(document => {
      console.log("render edit");
      res.render("celebrities/edit", { celebrity: document });
    })
    .catch(error => {
      console.log(error);
    });
});

//get information from editing form, update db and reload celebrities
router.post("/celebrities/:celebrityId", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.params.celebrityId },
    { $set: { name: name, occupation: occupation, catchPhrase: catchPhrase } }
  )
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

//open celebrity detail page
router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.celebrityId })
    .then(document => {
      res.render("celebrities/show", { celebrity: document });
    })
    .catch(error => {
      console.log(error);
    });
});

//MOVIES
//page showing all movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", { movieArray: movies });
    })
    .catch(error => {
      console.log(error);
    });
});

//page to add new movie
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

//get information from form, add new movie to db, reload movies page
router.post("/movies/new", (req, res, next) => {
  const { title, genre, plot, celebrity } = req.body;

  const newMovie = new Movie({
    title: title,
    genre: genre,
    plot: plot
  });

  newMovie.save().then(() => {
    res.redirect("/movies");
  });
});

//get id of movie that is clicked to be deleted, delete it and reload movies
router.post("/movies/:movieId/delete", (req, res, next) => {
  Movie.findOneAndRemove({ _id: req.params.movieId })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(error => console.log(error));
});

//find movie to be edited and open edit form page
router.get("/movies/:movieId/edit", (req, res, next) => {
  Movie.findOne({ _id: req.params.movieId })
    .then(document => {
      res.render("movies/edit", {
        movie: document
      });
    })
    .catch(error => {
      console.log(error);
    });
});

//get information from editing form, update db and reload movies
router.post("/movies/:movieId", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: req.params.movieId },
    {
      $set: {
        title: title,
        genre: genre,
        plot: plot
      }
    }
  )
    .then(() => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
    });
});

//open movie detail page
router.get("/movies/:movieId", (req, res, next) => {
  Movie.findOne({ _id: req.params.movieId })
    .populate("celebrity")
    .then(document => {
      res.render("movies/show", { movie: document });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
