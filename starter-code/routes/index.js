const express = require('express');
const router  = require('./celebrities');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
