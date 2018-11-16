const express    = require('express');
const router     = express.Router();
const User       = require('../models/User');
const bcrypt     = require('bcryptjs');
const bcryptSalt = 10;

const passport   = require("passport");



router.get('/signup', (req, res, next) => {
  res.render('users/signup');
});

router.post('/signup', (req, res, next)=> {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if(theUsername === "" || thePassword === ""){
    res.redirect('/');
    return;
  }

  User.findOne({username: theUsername })
        .then(user => {
                if (user !== null) {
                    res.render("signup", {
                        errorMessage: "Sorry, that username is taken."
                    });
                    return;
                    }
        


            const salt     = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(thePassword, salt);


            User.create({
              username: theUsername, 
              password: hashPass,
            })
            .then(()=>{
                res.redirect('/');
            })
            .catch((err)=>{
                next(err);
    })

    
    });

});

router.get('/login', (req, res, next)=> {

  res.render('users/login');
});


router.post("/login", passport.authenticate("local", {
  successRedirect: "/movies",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get('/logout', (req, res, next)=>{
  req.logout();
  res.redirect("/login");
})

module.exports = router;