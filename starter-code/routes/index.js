const express = require('express');
const router  = express.Router();
const celebrityRouter = require('./celebrities')
const moviesRouter = require('./movies')

router.use('/celebrities', celebrityRouter)
router.use('/movies', moviesRouter)

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
