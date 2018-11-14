const express = require("express");
const router = express.Router();

// Import the model to the router file
const Celebrity = require("../models/celebrity-model.js");

// Add the route to the celebrities list
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebResults => {
      res.locals.celebArray = celebResults;
      res.render("celebrities/index.hbs");
    })
    .catch(err => next(err));
  });

// Add a new celebrity
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

// Process the creation of a new celebrity
router.post("/celebrities/process-add", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(CelebDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      res.redirect("/celebrities/new")
    });
});

// Show the details of a celebrity
router.get("/celebrities/:celebId", (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findById(celebId)
    .then(celebDoc => {
      res.locals.celebItem = celebDoc;
      res.render("celebrities/show.hbs")
    })
    .catch(err => next(err));
});

// Delete a celebrity item
router.post("/celebrities/:celebId/delete", (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findByIdAndRemove(celebId)
    .then(celebDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => next(err)); 
});

// Add an "edit celebrity" route 
router.get("/celebrities/:celebId/edit", (req, res, next) => {
  const { celebId} = req.params;
  Celebrity.findById(celebId)
    .then(celebDoc => {
      res.locals.celebItem = celebDoc;
      res.render("celebrities/edit.hbs")
    })
    .catch(err => next(err));
});

// Process the edition of a celebrity
router.post("/celebrities/:celebId/edit-process", (req, res, next) => {
  const { celebId } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(
    celebId, 
    { $set: { name, occupation, catchPhrase } },
    { runValidators: true },
  )
    .then(celebDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => next(err));
});


module.exports = router;