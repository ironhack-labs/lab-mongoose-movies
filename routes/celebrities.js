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
module.exports = router;
