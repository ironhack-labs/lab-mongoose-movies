const express = require('express');
const router  = express.Router();
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {
    loggedIn : req.session.currentUser
  });
});

module.exports = router;
