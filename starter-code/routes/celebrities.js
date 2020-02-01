const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

router.get("/", async (req, res, next) => {
  await Celebrity.find()
  .then(celebrities => {
  res.render("celebrities/index", { celebrities });
  })
  .catch(error => {
    console.log(error);
  })
});

router.get("/:id", (req, res, next) => {
 Celebrity.findById(req.params.id)
  .then(celebritiesId => {
    res.render("celebrities/show", { celebrities: celebritiesId });
  })
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;