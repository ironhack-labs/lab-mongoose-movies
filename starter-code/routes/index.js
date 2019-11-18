const express = require('express');
const router  = express.Router();

const celebritiesRouter = require('./celebrities'); // calls celebrities.js
const moviesRouter = require('./movies'); // calls movies.js


// route /celebrities
router.use('/celebrities', celebritiesRouter);

// route /movies
router.use('/movies', moviesRouter);


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cinema' });
});

module.exports = router;
