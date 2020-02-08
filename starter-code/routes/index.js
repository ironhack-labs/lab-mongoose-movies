const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/cositas', (req, res, next) => {
  res.render('cositas');
});

module.exports = router;
