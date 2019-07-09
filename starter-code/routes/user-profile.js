const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login");

router.get('/user-profile', ensureLogin.ensureLoggedIn('/'),(req, res, next)=>{
  res.render('user-profile', {user: req.user})
});

module.exports = router;