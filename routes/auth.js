const express    = require('express');
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
    const username = req.body.username;
    const password = req.body.password;
    const email    = req.body.email
    const salt     = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
  
    User.create({
      username,
      email,
      password: hashPass
    })
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      console.log(error);
    })
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