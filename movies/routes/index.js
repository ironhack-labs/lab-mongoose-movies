var express = require('express');
var router = express.Router();
const { index: {index}} = require('../pages');
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.currentPage = index;
  res.render('index', { title: 'Express' });
});

module.exports = router;
