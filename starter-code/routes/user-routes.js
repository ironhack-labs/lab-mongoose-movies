const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const bcrypt  = require('bcryptjs');


router.get('/signup', (req, res, next)=>{
    res.render('auth/signup')
})


router.post('/signup', (req, res, next)=>{

    const salt  = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const username = req.body.username;

    
    User.create({username: username, password: hash})
    .then((result)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/login', (req, res, next)=>{
    res.render('auth/login')
})


router.post('/login', (req, res, next)=>{
    const theUsername = req.body.username;
    const thePassword = req.body.password;
  

  
    User.findOne({ "username": theUsername })
    .then(user => {
        if (!user) {
            console.log('USER DOES NOT EXIST!')
            res.redirect('/login')
          return;
        }
        if (bcrypt.compareSync(thePassword, user.password)) {
          // Save the login in the session!
          req.session.currentUser = user;// this is the line of code that actually logs us in
          res.redirect("/");
        } else {
          res.render("auth/login", {
            errorMessage: "Incorrect password"
          });
        }
    })
    .catch(error => {
      next(error);
    })
})


router.post('/logout', (req, res, next)=>{
    req.session.destroy()
    res.redirect('/')
})



module.exports = router;