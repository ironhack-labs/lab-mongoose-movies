var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/celebrities/index', (req, res, next) => {
  res.render('celebrities/index');
});

module.exports = router;
