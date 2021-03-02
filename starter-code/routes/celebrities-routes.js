const express = require("express");
const CelebrityModel = require("../models/celebrity");

const router = express.Router();

// ROUTE TO GET THE CELEBRITIES FORM
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

//ROUTE TO POST THE CELEBRITIES

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.create(req.body)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      res.render("celebrities/new-celebrity");
      console.log(error);
    });
});

// ROUTE TO DISPLAY ALL THE CELEBRITIES

router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
    .then((celebrity) => {
      res.render("celebrities/celebrities", { celebrity });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

module.exports = router;
