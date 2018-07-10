var express = require('express');
var router = express.Router();

router.use('/signup', require('./signup'));
router.use('/login', require('./login'));

/* Log out POST */
router.post('/logout', (req, res, next) => {
  delete req.session.currentUser;
  res.redirect('/');
});

module.exports = router;
