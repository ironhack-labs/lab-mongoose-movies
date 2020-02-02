const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

router.get("/", (req, res, next) => {
   Celebrity.find()
  .then(celebrities => {
  res.render("celebrities/index", { celebrities });
  })
  .catch(error => {
    console.log(error);
  })
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebritiesId => {
    res.render("celebrities/show", { celebrities: celebritiesId });
  })
  .catch(error => {
    console.log(error);
    next();
  })
});

router.get("/new", (req, res, next) => {
  
    res.render("celebrities/new");
  
  
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const object = Celebrity.create ({
    name,
    occupation,
    catchPhrase,
  })
  .then(addCelebrity => {
  res.redirect("/celebrities")
  })
  .catch(error => {
    res.render("/celebrities/new")
  })
  object.save();
  });

module.exports = router;