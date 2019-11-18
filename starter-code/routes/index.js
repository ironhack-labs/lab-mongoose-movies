const express = require('express');
const router  = express.Router();

const celebritiesRouter = require('./celebrities'); // calls celebrities.js


// route /celebrities
router.use('/celebrities', celebritiesRouter);



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
