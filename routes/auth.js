const express    = require('express');
const mongoose   = require('mongoose');
const router     = express.Router();
const User       = require('../models/User.model');
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bcrypt     = require("bcryptjs");

const bcryptSalt     = 10;

// GET Render signup page
router.get("/signup", (req, res, next) => 
  res.render("auth/signup")
)

// POST Create user on db
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }

  if (!username || !email || !password) {
    res.render('auth/signup', {
      errorMessage: 'All fields are mandatory. Please provide your username, email and password.'
    });
    return;
  }
  
  User.create({
    username,
    email,
    password: hashPass
  })
  .then(() => {
    res.redirect("/");
  })
  .catch(error => {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(500).render('auth/signup', { errorMessage: error.message });
    } else if (error.code === 11000) {
      res.status(500).render('auth/signup', { 
         errorMessage: 'Username and email need to be unique. Either username or email is already used.' 
      });
    } else {
      next(error);
    }
  });
});


// GET Render login page
router.get("/login", (req, res, next) => {
  res.render("auth/login");
}); 

// POST Authenticate user and redirect
router.post("/login", (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }

  User.findOne({ "username": theUsername })
  .then(user => {
      if (!user) {
        res.render("auth/login", {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
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
    next(error);
  })
});

// GET Logout user session
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});


module.exports = router;