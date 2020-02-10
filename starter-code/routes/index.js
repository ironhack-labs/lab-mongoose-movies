const express = require('express');
const router  = express.Router();

const celebritiesRouter = require('./celebrities')
const moviesRouter = require('./movies')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//router.use('/celebrities', celebritiesRouter);

router.use('/movies', moviesRouter);

module.exports = router;
