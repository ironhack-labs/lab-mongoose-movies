const express = require("express");
// const userRoutes = express.Router();
const flash = require("flash")
const User = require("../models/User");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;
// const passport = require("passport");



app.use(flash());
userRoutes.get('/login', (req, res, next)=>{  
    res.render('User/login', { "message": "error" })
})

userRoutes.post("/login", passport.authenticate("local", {
    successRedirect: "/landing-page",
    failureRedirect: "/landing-page",
    failureFlash: true,
    passReqToCallback: true
}));


app.use(flash());
passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({username}, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
}));

  userRoutes.get('/landing-page', (req, res, next)=>{
      res.render('User/landing-page')
  });

userRoutes.get("/signup", (req, res, next) => {
  res.render("User/signup");
});

userRoutes.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "" || password === "") {
        res.render("User/signup", { message: "Indicate username and password please" });
        return;
    }
    User.findOne({ username: req.body.username })
    .then(user => {
        if (user !== null) {
        res.render("User/signup", { message: "The username already exists" });
        return;
        }
        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);
        User.create({
            username: username,
            password: hashPass
        })
        .then(()=>{
            res.redirect('/landing-page');

        })
        .catch((err)=>{
            next(err);
        });
    })
    .catch(err => {
        next(err);
    })
});



  userRoutes.get('/login', (req, res, next)=>{
    // req.logout();
    res.redirect("/login");
  })



module.exports = userRoutes;