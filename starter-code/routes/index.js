const express = require('express');
const router  = express.Router();
const mongoose  = require('mongoose')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
