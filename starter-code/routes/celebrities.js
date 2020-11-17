const express = require("express");
const { render } = require("../app");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

// why only "/" , add next//
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebs) => {
      console.log(`All celebs: ${allCelebs}`);
      res.render("celebrities/index", { allCelebs });
    })
    .catch((error) =>
      console.log(`Unable to find all celebs. Error: ${error}`)
    );
});

router.get("/celebrities/:id", (req, res) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId)
    .then((celeb) => {
      console.log(`One celeb: ${celeb}`);
      res.render("celebrities/show", { celeb });
    })
    .catch((error) => console.log(`Unable to find one celeb. Error: ${error}`));
});

module.exports = router;
