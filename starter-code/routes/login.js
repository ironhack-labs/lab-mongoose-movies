const express = require('express');
const router  = express.Router();
const User = require('../models/user');

/* Get signup page */
router.get('/login', (req, res, next)=>{
  res.render('login')
});

module.exports = router;