var express = require('express');
var router = express.Router();

router.use('/users', require('./users'));
router.use('/celebrities', require('./celebrities'));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mongoose Movies' });
});

module.exports = router;
