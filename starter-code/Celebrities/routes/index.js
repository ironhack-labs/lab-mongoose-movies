var express = require('express');
const Celebrity = require('../models/Celebrity');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Celebrities'
  });
});



module.exports = router;
