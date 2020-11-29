const express = require("express");

const router = express.Router();

const Celebrity = require("../Models/celebrity.js");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then((allCelebs) => {
    console.log(allCelebs);
    res.render("celebrities-index", { allCelebs });
  });
});
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then((allCelebs) => {
    res.render("celebrities-show", { allCelebs });
  });
});
module.exports = router;
