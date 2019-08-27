const express = require("express");
const Celebrity = require("../models/Celebrities");

const router = express.Router();

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.error(error);
    });
});

router.get("/celebrities/:id", (req, res) => {});

module.exports = router;
