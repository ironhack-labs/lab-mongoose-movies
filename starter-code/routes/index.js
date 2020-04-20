/* jshint esversion: 9*/
const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Mongoose Movies'});
});

module.exports = router;
