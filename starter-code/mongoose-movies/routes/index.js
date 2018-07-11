var express = require('express');
var router = express.Router();

router.use('/celebrities', require('./celebrities'));

router.use('/auth/signup', require('./auth/signup'));
router.use('/auth/login', require('./auth/login'));
router.use('/auth/star', require('./auth/star'));
router.use('/auth/unstar', require('./auth/unstar'));
router.use('/auth/logout', require('./auth/logout'));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mongoose Movies' });
});

module.exports = router;
