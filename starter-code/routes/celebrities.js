const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      console.log(`/celebrities => ${allCelebrities.length} displayed`);
      res.render("celebrities/index", { celebrities: allCelebrities });
    })
    .catch((err) => console.log("Error displaying the celebrities:", err));
});

router.get("/new", (req, res, next) => res.render("celebrities/new"));

router.post("/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then((item) => res.redirect("/celebrities"))
    .catch((err) => {
      console.log("Error adding a new celebrity:", err);
      res.render("celebrities/new");
    });
});

router.post("/:celebrityId/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(res.redirect("/celebrities"))
    .catch((err) => console.log("Error removing the celebrity:", err));
});

router.get("/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => res.render("celebrities/show", celebrity))
    .catch((err) =>
      console.log("Error displaying loading a celebrity page:", err)
    );
});

router.get("/:celebrityId/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => res.render("celebrities/edit", celebrity))
    .catch((err) => console.log("Error editing the celebrity:", err));
});

router.post("/:celebrityId", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.params.id },
    { $set: { name, occupation, catchPhrase } }
  )
    .then(res.redirect("/celebrities"))
    .catch((err) => console.log("Error editing the celebrity:", err));
});

module.exports = router;
