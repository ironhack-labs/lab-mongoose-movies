const express = require('express');
const router  = express.Router();

const celebritiesRouter = require('./celebrities');


// route to /celebrities
router.use('/celebrities', celebritiesRouter);


// GET home page
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Cinema' });
});


module.exports = router;


