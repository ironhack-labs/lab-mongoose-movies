const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/populate", (req, res, next) => {
  const newCelebrity = new Celebrity({
    name: "Tom Cruise",
    occupation: "actor",
  });
  newCelebrity
    .save()
    .then((result) => {
      res.send(newCelebrity.name + " has been added to the DB!");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
