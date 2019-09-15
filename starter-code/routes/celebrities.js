const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", { celebrities });
    })
    .catch(err => next(err));
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(res.redirect('/celebrities/'))
  .catch(res.redirect('/celebrities/new'))});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => next(err));
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(res.redirect("/celebrities"))
  .catch(err => next(err));
});

module.exports = router;
