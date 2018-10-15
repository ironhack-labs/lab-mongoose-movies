// Packages
const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.js");

// GET - List of celebrities
router.get("/", function(req, res) {
  Celebrity.find()
  .then( celebrities => {
    res.render("celebrities/index", {"tabtitle": "Celebrities", "celebrities": celebrities});
  })
  .catch( error => {
    next(error);
  })
});

// GET - Add a new celebrity
router.get("/new", function(req, res) {
  res.render("celebrities/new", {"tabtitle": "Add celebrity"});
});

// POST - Add a new celebrity
router.post("/", function(req, res) {
  const newCelebrity = req.body;
  Celebrity.create(newCelebrity)
  .then( () => {
    res.redirect("/celebrities");
  })
  .catch( () => {
    res.redirect("/celebrities/new");
  })
});

// POST - Delete a celebrity
router.post("/:id/delete", function(req, res) {
  const id = req.params.id;
  Celebrity.findByIdAndDelete(id)
  .then( () => {
    res.redirect("/celebrities");
  })
  .catch( error => {
    next(error);
  })
});

// GET - Edit a celebrity
router.get("/:id/edit", function(req, res) {
  const id = req.params.id;
  Celebrity.findById(id)
  .then( (celebrity) => {
    res.render("celebrities/edit", {"tabtitle": "Edit celebrity", "celebrity": celebrity});
  })
  .catch( error => {
    next(error);
  })
});

// POST - Edit a celebrity
router.post("/:id", function(req, res) {
  const id = req.params.id;
  const celebrity = req.body;
  Celebrity.findByIdAndUpdate(id, celebrity)
  .then( () => {
    res.redirect("/celebrities");
  })
  .catch( error => {
    next(error);
  })
});

// GET - Show specific celebrity
router.get("/:id", function(req, res) {
  const id = req.params.id;
  Celebrity.findById(id)
  .then( celebrity => {
    res.render("celebrities/show", {"tabtitle": celebrity.name, "celebrity": celebrity});
  })
  .catch( error => {
    next(error);
  })
});

// Export
module.exports = router;