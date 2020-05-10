const express = require('express');
const router  = express.Router();
const celebrities = require('../routes/celebrities');
const movies = require('../routes/movies');


router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/celebrities', celebrities);
router.use('/movies', movies);


module.exports = router
