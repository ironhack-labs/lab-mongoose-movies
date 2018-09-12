const express    = require('express');
const router     = express.Router();
const User       = require('../models/User')
const bcrypt     = require('bcrypt')

router.get('/signup', (req, res, next)=>{
    res.render('users/signup')
})

router.post('/signup', (req, res, next)=>{
    const username = req.body.username
    const password = req.body.password

    if (username === "" || password === "") {
        res.render("users/signup", {
          errorMessage: "Indicate a username and a password to sign up"
        });
        return;
      }

      User.findOne({ "username": username })
      .then(user => {
          if (user !== null) {
            res.render("users/signup", {
            errorMessage: "Sorry, that username already exists"
        });
        return;
        }
      
    const saltRounds = 10;
    const thePassword = req.body.password;
    const salt  = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(thePassword, salt);

    User.create({
        username: req.body.username,
        password: hash
    })
    .then((result)=>{
        res.redirect('/');
    })
    .catch((err)=>{
        next(err);
    })
    })
})


router.get('/login', (req, res, next)=>{
    res.render('users/login')
})

router.post('/login', (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;

    if (username === "" || password === "") {
        res.render("auth/login", {
          errorMessage: "Oops, it look like you left one or more of the files blank, please fill in your username and password"
        });
        return;
      }

      User.findOne({ "username": username })
      .then(user => {
          if (!user) {
            res.render("auth/login", {
              errorMessage: "Sorry, that username doesn't exist"
            });
            return;
          }
          if (bcrypt.compareSync(password, user.password)) {
            // Save the login in the session!
            req.session.currentUser = user;
            res.redirect("/");
          } else {
            res.render("auth/login", {
              errorMessage: "Incorrect password"
            });
          }
      })
      .catch(error => {
        next(error)
      })
})

router.get("/logout", (req, res, next) => {
    req.logout()
    res.rendre('logout');
    
  });

module.exports = router;
