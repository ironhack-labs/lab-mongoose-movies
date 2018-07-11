var express = require('express');
var router = express.Router();

/* Log out POST */
router.post('/', (req, res, next) => {
  delete req.session.currentUser;
  res.redirect('/');
});

module.exports = router;
