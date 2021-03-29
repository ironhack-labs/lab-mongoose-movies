const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebrities) => {
      console.log("Retrieved celebrities from DB: ", allTheCelebrities);
      res.render("celebrities/index", { celebrities: allTheCelebrities });
    })
    .catch((error) => {
      console.log("Error while getting the celebrities from the DB: ", error);
      next(error);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  Movie.find().then((moviesFromDB) => {
    res.render("celebrities/new", { movies: moviesFromDB });
  });
});

router.get("/celebrities/:id", (req, res) => {
  const { id } = req.params;

  Celebrity.findById(id)
    //   Celebrity.find({ _id: id }) same as above
    .populate("movies")
    .then((theCelebrity) =>
      res.render("celebrities/show", { celebrity: theCelebrity })
    )
    .catch((error) => {
      console.log("Error while retrieving celebrity details: ", error);
      next(error);
    });
});

router.post("/celebrities", (req, res, next) => {
  Celebrity.create(req.body)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrityFromDB) => {
      res.render("celebrities/edit", celebrityFromDB);
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then((response) => {
      console.log("response", response);
      res.redirect("/celebrities");
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
