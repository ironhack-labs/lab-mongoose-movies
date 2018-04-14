const express = require('express');
const router  = express.Router();

const Movies = require("../models/Celebrity")

router.get("/",(req, res) => {
  Movies.find().then(celebrities => {
    console.log(Celebrity);
    res.render("celebrities",{celebrities});
  });
});

module.exports = router;