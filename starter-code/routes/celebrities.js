const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrities");

router.get("/celebrities", (req, res) => {
  Celebrity.find({})
    .then(allCelebrities => {
      console.log(allCelebrities)
      res.render("celebrities/index", { celebSpecs: allCelebrities });
    })
    .catch(err => console.log(err));
    
});

router.get("/celebrities/:id", (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId)
    .then(retrievedCelebrity =>
      res.render("celebrities/detail", retrievedCelebrity)
    )
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/celebrities/create", (req, res, next) =>
  res.render("../views/celebrities/create")
);

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(newCelebrity => {
      res.redirect("/celebrities");
    })
    .catch(err => console.log(err));
});

router.get("/celebrities/:id/delete", (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findByIdAndDelete(celebId)
    .then(deletedCelebrity => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log(err);
      res.redirect("/celebrities");
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId)
    .then(selectedCelebrity =>
      res.render("../views/celebrities/edit.hbs", selectedCelebrity)
    )
    .catch(err => console.log(err));
});

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  const celebId = req.params.id;

  Celebrity.findByIdAndUpdate(celebId, { name, occupation, catchPhrase })
    .then(updatedCeleb => res.redirect("/celebrities"))
    .catch(err => console.log(err));
});

module.exports = router;
