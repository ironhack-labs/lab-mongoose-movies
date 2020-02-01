const express = require('express');
const router  = express.Router();
const celebrities = require("./celebrities");
const movies = require("./movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.use("/celebrities",celebrities);
router.use("/movies",movies);

module.exports = router;
