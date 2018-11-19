const express = require("express");
const userRoutes = express.Router();
const flash = require("flash")
const User = require("../models/User");
// const passport = require("passport");
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;
const passport = require("passport");
const username = require("../models/User");



userRoutes.get('/login', (req, res, next)=>{  
    res.render('User/login', { message: req.flash("error") })
})




  userRoutes.post("/login", passport.authenticate("local", {
    successRedirect: "/landing-page",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  
  }));
userRoutes.post("/signup", (req, res, next) => {
    // const username = req.body.username;
    // const password = req.body.password;

    // if (username === "" || password === "") {
    //     res.render("User/signup", { message: "Indicate username and password please" });
    //     return;
    // }
    User.findOne({ username: req.body.username })
    .then(anyUser => {
        if (anyUser !== null) {
        res.render("User/signup", { message: "The username already exists" });
        return;
        }
        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(req.body.password, salt);
        User.create({
            username: req.body.username,
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

userRoutes.get('/landing-page', (req, res, next)=>{
    res.render('User/landing-page');
});

userRoutes.get("/signup", (req, res, next) => {
res.render("User/signup");
});

userRoutes.get("/login", (req, res, next) => {
  res.render("User/login");
});



//   userRoutes.get('/login', (req, res, next)=>{
//     // req.logout();
//     res.redirect("/login");
//   })



module.exports = userRoutes;