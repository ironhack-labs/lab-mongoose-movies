const express    = require('express');
const router     = express.Router();
const User       = require('../models/User');
const bcrypt     = require('bcryptjs');
const bcryptSalt = 10;



router.get('/signup', (req, res, next) => {
  res.render('signup');
});