const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

router.get("/index", (req, res, next) => {
  Celebrity.find({})
    .then(allCelebrities =>
      res.render("celebrities/index", { celebrities: allCelebrities })
    )
    .catch(function() {
      next();
      throw new Error("There's an error.");
    });
});



router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityData =>
      res.render("celebrities/show", { celebrity: celebrityData })
    )
    .catch(function() {
      next();
      throw new Error("There's an error 2.0!");
    });
});



router.get("/new", (req, res, next) => res.render("celebrities/new"));
router.post("/new", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(() => res.redirect("/celebrities/index"))
    .catch(function() {
      next();
      throw new Error("Como puedes ser tan desgraciado de nos er capaz de añadir algo!");
    });
});

router.get("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(deletedCelebrity => res.redirect("/celebrities/index"))
    .catch(function() {
      next();
      throw new Error("Hmmmmm.... problems!");
    });
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityDetail =>
      res.render("celebrities/edit", { celebrity: celebrityDetail })
    )
    .catch(function() {
      next();
      throw new Error("Algo no ha ido bien, willy!");
    });
});

router.post("/:id/edit", (req, res) => {
  Celebrity.findByIdAndUpdate(req.body._id, req.body).then(updatedCelebrity => {
    res.redirect("/celebrities/index");
  });
}); 

module.exports = router;