const express = require('express');
const router  = express.Router();


// route to celebreties
const celebritiesRouter = require('./celebrities');

// Route to movies
const moviesRoute = require("./movies");



// route  /celebrities
 router.use('/celebrities', celebritiesRouter);



// Route to movies
 router.use("/movies", moviesRoute);



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
