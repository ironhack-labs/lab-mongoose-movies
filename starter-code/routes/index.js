const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celeb => {
      // res.send(celeb)
      res.render("celebrities.hbs", {
        celebrity: celeb
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/celebrities/:celebId", (req, res) => {
  Celebrity.findById(req.params.celebId)
    .then(celeb => {
      res.render("show.hbs", {
        celebInfo: celeb
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/new", (req, res) => {
  res.render("new.hbs");
});

router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  }).then(() => {
    res.redirect("/celebrities");
  });
});

router.post("/celebrities/:id/delete", (req, res) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/celebrities/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render("edit.hbs", {
        celeb
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/celebrities/:id", (req, res) => {
  Celebrity.updateOne(
    {
      _id: req.params.id
    },
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
  )
    .then(() => {
      res.redirect("/celebrities/" + req.params.id);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies => {
      res.render("movies.hbs", {
        movies
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movie.hbs", { movieInfo: movie });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/newmovie", (req, res) => {
  res.render("newMovie.hbs");
});

router.post("/movies", (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot
  }).then(() => {
    res.redirect("/movies");
  });
});

router.post("/movies/:id/delete", (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies/:id/edit", (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("editMovie.hbs", { movie });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/movies/:id", (req, res) => {
  Movie.updateOne(
    {
      _id: req.params.id
    },
    {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
  )
    .then(() => {
      res.redirect("/movies/" + req.params.id);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
