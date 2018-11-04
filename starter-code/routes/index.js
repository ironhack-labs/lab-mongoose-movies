const express = require('express');
const router  = express.Router();
const celebertiesRoute = require ("./celeberties")
const moviesRoute = require ("./movies")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use("/", celebertiesRoute)
router.use("/", moviesRoute)


module.exports = router;
