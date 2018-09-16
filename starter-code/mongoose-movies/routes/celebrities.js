const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render("celebrities/index", {celebrities}))
    .catch(e => next(e));
});

module.exports = router;
