const express = require("express");
const router = express.Router();
const celebrities = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  celebrities
    .find()
    .then(celeb => {
      res.render("celebrities/index", { celeb });
    })
    .catch(e => {
      console.log("Error", e);
      next();
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) => {
  celebrities.findById(req.params.id).then(cel => {
    res.render("celebrities/show", { cel });
  });
});

router.get("/celebrities/:id/delete", (req, res, next) => {
  celebrities
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/celebrities"))
    .catch(e => console.log("ERROR", e));
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  celebrities
    .findById(req.params.id)
    .then(cel => {
      res.render("celebrities/edit", { cel });
    })
    .catch(e => console.log("ERROR", e));
});

router.post("/celebrities", (req, res, next) => {
  const celeb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebrities
    .create(celeb)
    .then(() => res.redirect("/celebrities"))
    .catch(e => console.log("ERROR", e));
});

router.post("/celebrities/:id", (req, res, next) => {
  const celeb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  celebrities
    .findByIdAndUpdate(req.params.id, celeb)
    .then(() => res.redirect("/celebrities/"+req.params.id))
    .catch(e => console.log("ERROR", e));
});

module.exports = router;
