const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then((readAll) => {
      console.log(readAll)
      res.render("read", readAll);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
