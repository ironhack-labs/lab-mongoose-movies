const express = require("express");
const Celebrity = require("../models/celebrity-model.js");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .sort({ rating: -1 })
    .then(celibrityResults => {
      res.locals.celebrityArray = celibrityResults;
      res.render("celebrities/celebrity-list.hbs");
    })
    .catch(err => next(err));
});

router.get("/celebrities/celebrity-new", (req, res, next) => {
  res.render("celebrities/celebrity-new.hbs");
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findById(celebrityId)
    .then(celebrityDoc => {
      res.locals.celebrityItem = celebrityDoc;
      res.render("celebrities/celebrity-details.hbs");
    })
    .catch(err => next(err));
});

router.post("/process-celebrity", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrityDoc => {
      res.redirect(`/celebrities/${celebrityDoc.id}`);
    })
    .catch(err => next(err));
});

router.get("/celebrities/:celebrityId/delete", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(celebrityDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => next(err));
});

router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findById(celebrityId)
    .then(celebrityDoc => {
      res.locals.celebrityItem = celebrityDoc;
      res.render("celebrities/celebrity-edit.hbs");
    })
    .catch();
});

router.post("/celebrities/:celebrityId/process-edit", (req, res, next) => {
  const { celebrityId } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(
    celebrityId,
    { $set: { name, occupation, catchPhrase } },
    { runValidators: true }
  )
    .then(celebrityDoc => {
      res.redirect(`/celebrities/${celebrityDoc._id}`);
    })
    .catch(err => next(err));
});

module.exports = router;
