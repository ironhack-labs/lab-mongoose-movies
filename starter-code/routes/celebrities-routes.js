const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// GET Celebrities //
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      console.log(allCelebrities);
      res.render("celebrities/index", { celebrities: allCelebrities });
    })
    .catch((err) => `There was an error : ${err}`);
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then((celebrity) => {
      console.log("New celebrity successfully created!");
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(`Error while creating this celebrity: ${err}`);
      res.render("celebrities/new-celebrity");
    });
});

module.exports = router;
