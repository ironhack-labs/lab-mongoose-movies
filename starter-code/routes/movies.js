const express = require('express');
const router  = express.Router();
const moviesModel = require("./../models/movie");

router.get("/movies", (req, res) => {
    moviesModel
      .find()
      .then(dbResults => {
        res.render("movies/index", {
          movies: dbResults
        });
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
});

router.get("/movies/single/:id", (req, res) => {
    moviesModel
    .findById(req.params.id)
    .then(movie => {
        res.render("movies/show", {movie})
    })
    .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
});

router.get("/movies/add", (req, res) => {
    res.render("movies/new");
  });


router.post("/movies/add", (req, res) => {
    const { title, genre, plot } = req.body;
    moviesModel
      .create({
        title,
        genre,
        plot
      })
      .then(dbRes => {
            console.log("success", dbRes);
           res.redirect("/movies")
      })
      .catch(dbErr => {
        console.log(dbErr);
        res.render("/movies/add");
      });
});

router.get("/movies/:id/edit", (req, res) => {
    moviesModel
      .findById(req.params.id)
      .then(dbRes => {
        res.render("movies/edit", { movie: dbRes });
      })
      .catch(dbErr => console.error(dbErr));
  });


  router.post("/movies/:id/edit", (req, res) => {
    const { title, genre, plot } = req.body;
    moviesModel
    .findByIdAndUpdate(req.params.id, {
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

  router.get("/movies/:id/delete", (req, res) => {
    moviesModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        console.log("id was deleted", dbRes);
        res.redirect("/movies");
      })
      .catch(dbErr => {
        console.error(dbErr);
      });
  });



module.exports = router;