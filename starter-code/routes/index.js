const express = require('express');
const router  = express.Router();

const ensureLogin = require("connect-ensure-login");  

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/blah', ensureLogin.ensureLoggedIn('/login') ,(req, res, next)=>{

  // this is how you can manually add something to req.flash
  req.flash('error', 'Random Word')
  res.redirect('/')
})


module.exports = router;
