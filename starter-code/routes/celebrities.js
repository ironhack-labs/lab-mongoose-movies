const express = require("express");
const router = new express.Router();
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

// // Base

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then((dbSuccess) => {
      res.render("celebrities/index", {
        myCelebrities: dbSuccess,
      });
    })
    .catch((next) => {
      console.log(next);
    });
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((dbSuccess) => {
      res.render("movies/index", {
        myMovies: dbSuccess,
      });
    })
    .catch((next) => {
      console.log(next);
    });
});

// //Create Celebrity

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.post("/celebrities", (req, res) => {
  Celebrity.create(req.body).then((dbSuccess) => {
    Celebrity.find({})
      .then((dbSuccess) => {
        res.render("celebrities/", {
          myCelebrities: dbSuccess,
        });
      })
      .catch((err) => {
        res.render("celebrities/new");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// // Create Movie

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new.hbs");
});

router.post("/movies", (req, res) => {
  Movie.create(req.body).then((dbSuccess) => {
    Movie.find({})
      .then((dbSuccess) => {
        res.render("movies/", {
          myMovies: dbSuccess,
        });
      })
      .catch((err) => {
        res.render("movies/new");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// //Delete Celebrity

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((dbSuccess) => {
      res.redirect("/celebrities");
    })
    .catch((next) => {
      console.log(next);
    });
});

// //Delete Movie

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then((dbSuccess) => {
      res.redirect("/movies");
    })
    .catch((next) => {
      console.log(next);
    });
});

// //Manage Celebrities

router.get("/celebrities/:id/edit/", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((dbSuccess) => {
      res.render("celebrities/edit", {
        myCelebrity: dbSuccess,
      });
    })
    .catch((next) => {
      console.log(next);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  if (
    req.body.name === "" ||
    req.body.occupation === "" ||
    req.body.catchPhrase === ""
  ) {
    Celebrity.findById(req.params.id)
      .then((dbSuccess) => {
        res.render("celebrities/edit", {
          myCelebrity: dbSuccess,
        });
      })
      .catch((next) => {
        console.log(next);
      });
  } else {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .then((dbSuccess) => {
        res.redirect("/celebrities");
      })
      .catch((next) => {
        console.error(next);
      });
  }
});

// // Manage Movies

router.get("/movies/:id/edit/", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((dbSuccess) => {
      res.render("movies/edit", {
        myMovie: dbSuccess,
      });
    })
    .catch((next) => {
      console.log(next);
    });
});

router.post("/movies/:id", (req, res, next) => {
  if (
    req.body.name === "" ||
    req.body.occupation === "" ||
    req.body.catchPhrase === ""
  ) {
    Movie.findById(req.params.id)
      .then((dbSuccess) => {
        res.render("movies/edit", {
          myMovie: dbSuccess,
        });
      })
      .catch((next) => {
        console.log(next);
      });
  } else {
    Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .then((dbSuccess) => {
        res.redirect("/movies");
      })
      .catch((next) => {
        console.error(next);
      });
  }
});

// // ID Celebrities

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((dbSuccess) => {
      res.render("celebrities/show", {
        myCelebrity: dbSuccess,
      });
    })
    .catch((next) => {
      res.render("error.hbs");
      console.error(next);
    });
});

// // ID Movies

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((dbSuccess) => {
      res.render("movies/show", {
        myMovie: dbSuccess,
      });
    })
    .catch((next) => {
      res.render("error.hbs");
      console.error(next);
    });
});

module.exports = router;