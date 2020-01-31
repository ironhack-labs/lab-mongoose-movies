const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/Celebrity");

router.get("/all", (req, res) => {
    celebrityModel
    .find()
    .then(celebrities => {
      res.render("./celebrities/index", {
        celebrities
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

module.exports = router;
