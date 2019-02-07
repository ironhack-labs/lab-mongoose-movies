const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// ****************

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      res.locals.celebArray = celebs;
      res.render("celebrities.hbs");
    })
    .catch(err => next(err));
});

// ****************

router.get("/celebrities/new", (req, res, next) => {
  res.render("new.hbs");
});

// ****************

router.post("/celebrities/:celebId/delete", (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findByIdAndRemove(celebId)
    .then(celeb => {
      res.locals.deletedCeleb = celeb.name;
      res.redirect("/celebrities");
    })
    .catch(err => next(err));
});

// ****************

router.get("/celebrities/:celebId", (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findById(celebId)
    .then(celeb => {
      res.locals.celebInfo = celeb;
      res.render("show.hbs");
    })
    .catch(err => next(err));
});

// ****************

router.post("/process-new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(celeb => {
      res.redirect(`/celebrities/${celeb._id}`);
    })
    .catch(err => next(err));
});

module.exports = router;
