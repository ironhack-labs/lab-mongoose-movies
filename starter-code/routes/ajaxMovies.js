const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/ajaxmovies', (req, res, next) => {
  res.render('ajaxMovies');
});

module.exports = router;