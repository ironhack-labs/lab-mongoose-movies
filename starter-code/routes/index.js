const express = require('express');
const router  = express.Router();
const celebRouter = require("./celebrities-routes");
const movieRouter = require("./movies-routes")

router.use('/celebrities', celebRouter);
router.use('/movies', movieRouter);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
