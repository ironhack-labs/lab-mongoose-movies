const express = require('express');
const router  = express.Router();

/* GET movies page */
router.get('/index', (req, res, next) => {
  res.render('movies/index');
});

module.exports = router;
