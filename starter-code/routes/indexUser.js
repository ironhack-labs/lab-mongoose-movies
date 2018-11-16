const express    = require('express');
const router     = express.Router();
const User       = require('../models/User');
const bcrypt     = require('bcryptjs');
const bcryptSalt = 10;
const passport   = require("passport");
const Movie      = require('../models/Movies')

router.get('/signup', (req, res, next) => {
  res.render('views-user/signup');
}); //done and working

router.post('/signup', (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
      
    if (username === "" || password === "") {
        res.render("views-user/signup", { message: "Indicate username and password" });
        return;
      }

      User.findOne({username: username })
        .then((user) => {
                if (user !== null) {
                    res.render("views-user/signup", { message: "The username already exists" });
                    return;
                    }
        
            const salt     = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(password, salt);
    
            User.create({
                username: req.body.username,
                password: hashPass,
                profilePic:  req.body.image,
                firstName: req.body.first,
                lastName: req.body.last,
                bio: req.body.bio,
            })
            .then((theUser)=>{
              req.login(theUser, (err) => {
                  if (err) {
                      req.flash('error', 'something went wrong with auto login, please log in manually')
                      res.redirect('/user/login')
                    return;
                  }
                  res.redirect('/user/profile');
                });        
          })
          .catch((err)=>{
              next(err);
          })
      })
      .catch((err)=>{
          next(err);
      })
});//end of router.post for /signup
//done, need ot test with new syntax


router.get('/login', (req, res, next) => {
    res.render('views-user/login', { "message": req.flash("error") })
});  //done and working

router.post("/login", passport.authenticate("local", {
  successRedirect: "/user/profile",
  failureRedirect: "/user/login",
  failureFlash: true,
  passReqToCallback: true
}));  //done and working


router.get('/logout', (req, res, next)=>{
  req.logout();
  res.redirect("/user/login");
});  //done and working


router.get('/profile', (req, res, next)=>{
  Movie.find({producer: req.user._id})
  .then((thisPersonsFilms)=>{
      
      res.render('views-user/profile', {user: req.user, films: thisPersonsFilms});

  })
  .catch((err)=>{
    next(err);
  })
})

module.exports = router;