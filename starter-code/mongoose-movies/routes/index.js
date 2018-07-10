var express = require('express');
var router = express.Router();

router.use('/celebrities', require('./celebrities'));
router.use('/auth', require('./auth/'));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mongoose Movies' });
});

module.exports = router;
