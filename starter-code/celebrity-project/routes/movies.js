const express = require('express');
const router = express.Router();

/* GET movies page */
router.get('/movies', (req, res, next) => {
  res.render('movies-page');
});

module.exports = router;
