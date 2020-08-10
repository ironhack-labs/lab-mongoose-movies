const express = require("express");

const Celebrity = require("../models/Celebrity.model");

const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((allTheCelebritiesFromDB) => {
      console.log(allTheCelebritiesFromDB);
      res.render("celebrities/index.hbs", {
        celebrities: allTheCelebritiesFromDB,
      });
    })
    .catch((err) =>
      console.log(`Err while getting the books from the  DB: ${err}`)
    );
});

router.get("/celebrities/:id", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then((celebrityToShow) => {
      res.render("celebrities/show.hbs", { singleceb: celebrityToShow });
    })
    .catch((error) =>
      console.log(`Error while getting a single celebrity for edit: ${error}`)
    );
});

// Iteration #4: Adding New Celebrities

router.get("/celebrities/new", (req, res) => res.render("celebrities/new"));

// POST route to submit the form to create a post

router.post("/celebrities/new", (req, res) => {
  // console.log(req.body);
  const { name, occupation, catchphrase } = req.body;
  const celeb = {
    name: name,
    occupation: occupation,
    catchPhrase: catchphrase,
  };
  const newCeleb = new Celebrity(celeb);

  newCeleb
    .save()
    .then(() => res.redirect("/celebrities"))
    .catch((error) => `Error while creating a new book: ${error}`);
});

// Delete Celebrities

router.post("/celebrities/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Movie.findByIdAndRemove(id)
    .then(res.redirect("/celebrities"))
    .catch((err) => {
      next;
      console.log("Error deleting celebrity from DB: ", err);
    });
});

module.exports = router;
