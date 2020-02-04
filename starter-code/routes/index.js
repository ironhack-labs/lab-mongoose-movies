const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");
const mongoose = require("mongoose");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrityDocuments => {
      res.render("celebrities/index.hbs", {
        celebrityList: celebrityDocuments
      });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityDocument => {
      res.render("celebrities/show.hbs", celebrityDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchphrase
  })
    .then(createdCeleb => {
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      next(err);
    });

  // const celeb = new Celebrity({
  //   name: req.body.name,
  //   occupation: req.body.occupation,
  //   catchphrase: req.body.catchphrase
  // });
  // celeb.save(function(err) {
  //   if (err) {
  //     return handleError(err);
  //   } else {
  //     console.log("✨");
  //   }
  // });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(createdCeleb => {
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/edit", celeb);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  Celebrity.updateOne(
    { _id: req.params.id },
    {
      name,
      occupation,
      catchphrase
    }
  )
    .then(celeb => {
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movieDocuments => {
      res.render("movies/index.hbs", {
        movieList: movieDocuments
      });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new.hbs");
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieDocument => {
      res.render("movies/show.hbs", movieDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies", (req, res, next) => {
  const { name, genre, plot } = req.body;
  Movie.create({
    name,
    genre,
    plot
  })
    .then(createdMovie => {
      res.redirect(`/movies`);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(createdMovie => {
      res.redirect(`/movies`);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", movie);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/:id", (req, res, next) => {
  const { name, genre, plot } = req.body;
  Movie.updateOne(
    { _id: req.params.id },
    {
      name,
      genre,
      plot
    }
  )
    .then(movie => {
      res.redirect(`/movies`);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
