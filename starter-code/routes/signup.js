const express = require('express');
const router  = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

/* Get signup page */
router.get('/signup', (req, res, next)=>{
  res.render('signup');
});

router.post('/userSignup', (req, res, next)=>{

  const pass = req.body.password;
  const user = req.body.username;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassWord =  bcrypt.hashSync(pass, salt);

  //check if username is already in use
  User.findOne({username: user})
  .then((data)=>{
    if(data){
      res.redirect('signup', {message: 'This is username is in use already, try again!'});
    } else {
      console.log({username: user, password: hashedPassWord});
      User.create({username: user, password: hashedPassWord})
      .then(()=>{
          console.log('yay');
          res.redirect('/');
      })
      .catch((err)=>{
          console.log('Error 2');
          next(err);
      });
    }
  })
  .catch((err)=>{
    //console.log('Error 1');
  });

});

module.exports = router;