const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity.model");

//GET celebs
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) =>
      res.render("celebrities/index", { allCelebrities })
    )
    .catch((err) => next(err));
});

//GET specific celeb
router.get("/:id", (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId)
    .then((celebrity) => res.render("celebrities/show", celebrity))
    .catch((err) => next(err));
});

// GET form for NEW celeb
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

// POST NEW celeb
router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase,
  })
    .then((newCelebrity) => {
      console.log("new celebrity created", newCelebrity);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("Error creating new celebrity", err);
      res.redirect("/celebrities/new");
    });
});

router.post("/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => console.error("Error deleting the celebrity", err));
});

module.exports = router; //
