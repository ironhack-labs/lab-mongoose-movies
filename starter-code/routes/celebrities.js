const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res) => {
  Celebrity.find().then((celebritiesFound) => {
    console.log("Here are your celebrities: ", celebritiesFound);
    res.render("celebrities/index", { celebrities: celebritiesFound });
  });
});

router.get("/celebrities/:celebrityID", (req, res, next) => {
  const { celebrityID } = req.params;
  Celebrity.findById(celebrityID)
    .then((celebrityFoundViaID) => {
      console.log("Here is what you were looking for:", celebrityFoundViaID);
      res.render("show", { celebrityFoundViaID });
    })
    .catch((err) => {
      console.log("There was an error: ", err);
    });
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

module.exports = router;
