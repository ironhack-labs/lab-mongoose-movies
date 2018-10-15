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
    console.log(error);
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
    console.log(error);
  })
});

// Export
module.exports = router;