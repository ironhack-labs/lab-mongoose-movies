const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* Celebrities */
router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrityDocuments => {
      res.render("celebrities/index", { celebritiesList: celebrityDocuments });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  //
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(createdCelebrity => {
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      res.render("celebrities/new");
    });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(celebrityDocument => {
      // res.send(celebrityDocument);
      res.render("celebrities/celebrityDetails", celebrityDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:celebrityId/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(() => res.redirect("/celebrities"))
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(celebrityDocument => {
      res.render("celebrities/edit", celebrityDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:celebrityId/edit", (req, res, next) => {
  Celebrity.updateOne(
    { _id: req.params.celebrityId },
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
  )
    .then(() => res.redirect("/celebrities"))
    .catch(err => {
      next(err);
    });
});

/* Movies */
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movieDocuments =>
      res.render("movies/index", { moviesList: movieDocuments })
    )
    .catch(err => {
      next(err);
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movieDocument => {
      res.render("movies/movieDetails", movieDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(createdMovie => {
      res.redirect("/movies");
    })
    .catch(err => {
      res.render("/movies/new");
    });
});

router.post("/movies/:movieId/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then(() => res.redirect("/movies"))
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:movieId/edit", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movieDocument => {
      res.render("movies/edit", movieDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/:movieId/edit", (req, res, next) => {
  Movie.updateOne(
    { _id: req.params.movieId },
    {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
  )
    .then(() => res.redirect("/movies"))
    .catch(err => {
      res.render("movies/edit");
    });
});

module.exports = router;
