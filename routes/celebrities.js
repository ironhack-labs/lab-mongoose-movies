const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

/* GET home page */
router.get("/celebrities", (req, res, next) => {
  const celebrities = Celebrity.find()
    .then()
    .catch((err) => {
      console.log("Error occured while finding the celebrities", err);
    });
  res.render("celebrities/index", { celebrities: celebrities });
});

router.get("/celebrities/:id", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((celebrity) =>
      res.render("celebrities/show", { celebrity: celebrity })
    )
    .catch((err) => {
      console.log("Error occured while finding the celebrity", err);
      res.redirect("/celebrities");
    });
});

router.get("celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      Celebrity.save().then(res.redirect("/celebrities"));
    })
    .catch((err) => {
      console.log("Error occured while creating the celebrity", err);
      res.redirect("/celebrities/new");
    });
});

module.exports = router;
