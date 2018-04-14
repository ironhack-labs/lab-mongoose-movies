const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrities => res.render("celebrities", {celebrities}))
    .catch(err => console.log(err));
});

module.exports = router;
