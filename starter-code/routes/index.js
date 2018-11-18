const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const genericCeleb = new Celebrity();
const Movie = require("../models/Movie");
const genericMovie = new Movie();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebs => {
      console.log(celebs);
      res.render("celebrities", { celebs: celebs });
    })
    .catch(err => {});
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      console.log(celeb);
      res.render("celebrity", { celeb: celeb });
    })
    .catch(err => {});
});

router.get("/new", (req, res, next) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  genericCeleb.name = req.body.name;
  genericCeleb.occupation = req.body.occupation;
  genericCeleb.catchPhrase = req.body.catchPhrase;
  genericCeleb
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {});
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celeb => {
      console.log(celeb);
      res.redirect("/celebrities");
    })
    .catch(err => {});
});

router.get("/edit/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celeb => {
    console.log(celeb);
    res.render("edit", { celeb: celeb });
  });
});

router.post("edit/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.query.celebs_id },
    { $set: { name, occupation, catchPhrase } }
  )
    .then(book => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

//movies

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log(movies);
      res.render("movies", { movies: movies });
    })
    .catch(err => {});
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render("movie", { movie: movie });
    })
    .catch(err => {});
});

router.get("/newmovies", (req, res, next) => {
  res.render("newmovies");
});

router.post("/newmovies", (req, res) => {
  genericMovie.title = req.body.title;
  genericMovie.genre = req.body.genre;
  genericMovie.plot = req.body.plot;
  genericMovie
    .save()
    .then(() => {
      res.redirect("/movies");
    })
    .catch(() => {});
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      console.log(movie);
      res.redirect("/movies");
    })
    .catch(err => {});
});

router.get("/editmovie/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(movie => {
    console.log(movie);
    res.render("edit", { movie: movie });
  });
});

router.post("editmovie/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: req.query.movies_id },
    { $set: { title, genre, plot } }
  )
    .then(book => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
