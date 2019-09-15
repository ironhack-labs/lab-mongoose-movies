const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(allCelebrities =>
      res.render("celebrities/index", { celebrities: allCelebrities })
    )
    .catch(function() {
      next();
      throw new Error("Sorry to say, but this is an error.");
    });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityDetail =>
      res.render("celebrities/show", { celebrity: celebrityDetail })
    )
    .catch(function() {
      next();
      throw new Error("Okay, so this is an error");
    });
});

router.get("/new", (req, res, next) => res.render("celebrities/new"));
router.post("/new", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(() => res.redirect("/celebrities"))
    .catch(function() {
      next();
      throw new Error("Try again!");
    });
});

router.get("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(deletedCelebrity => res.redirect("/celebrities"))
    .catch(function() {
      next();
      throw new Error("Ooops!");
    });
});
router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityDetail =>
      res.render("celebrities/edit", { celebrity: celebrityDetail })
    )
    .catch(function() {
      next();
      throw new Error("This. Is. An. Error.");
    });
});

router.post("/:id/edit", (req, res) => {
  Celebrity.findByIdAndUpdate(req.body._id, req.body).then(updatedCelebrity => {
    res.redirect("/celebrities");
  });
});

module.exports = router;