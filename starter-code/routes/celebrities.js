const express = require("express");
const Celebrity = require("../models/celebrity.js");
const router = express.Router();

// Iteration 2:
// Listing Celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityResult => {
      res.locals.celebArray = celebrityResult;
      res.render("celebrities/index");
    })
    .catch(err => next(err));
});

//(ORDER MATTERS WITH SIMILAR URLS!!!)
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

//Iteration 3
//Getting info for one Celebrity
router.get("/celebrities/:celebrityId", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findById(celebrityId)
    .then(celebDoc => {
      res.locals.celebItem = celebDoc;
      res.render("celebrities/show");
    })
    .catch(err => next(err));
});

//Iteration 4
//Adding a new celebrities
router.post("/addceleb", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebDoc => {
      //redirect if SUCESSFUL
      //redirect to avoid duplicating data
      //redirect =! render
      //only redirect to URL /celebrities/index instead of index.hbs
      res.redirect("/celebrities");
    })
    .catch(err => next(err));
});

//Iteration 5
//Deleting a Celebrity
router.post("/celebrities/:celebrityId/delete", (req, res, next) => {
  // res.send(req.params);
  const { celebrityId } = req.params;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(celebDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => next(err));
});

//Iteration 6
//EDIT or Update a celebrity
router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findById(celebrityId)
    .then(celebDoc => {
      res.locals.celebItem = celebDoc;
      res.render("celebrities/edit");
    })
    .catch(err => next(err));
});

router.post("/celebrities/:celebrityId/updateedit", (req, res, next) => {
  const { celebrityId } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(
    celebrityId, // ID of the document to UPDATE
    { $set: { name, occupation, catchPhrase}}, // changes to be made
    { runValidators: true } //additional settings
  )
    .then(celebDoc => {
      res.redirect(`/celebrities/${celebrityId}`);
    })
    .catch(err => next(err));
});

module.exports = router;
