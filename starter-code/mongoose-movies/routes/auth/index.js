var express = require('express');
var router = express.Router();

router.use('/signup', require('./signup'));
router.use('/login', require('./login'));
router.use('/star', require('./star'));
router.use('/unstar', require('./unstar'));

/* Log out POST */
router.post('/logout', (req, res, next) => {
  delete req.session.currentUser;
  res.redirect('/');
});

module.exports = router;
