const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", { celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrity/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then(showCelebrities => {
      res.render("showCelebrities", { showCelebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/newCelebrities", (req, res) => {
  res.render("/newCelebrities");
});
module.exports = router;
