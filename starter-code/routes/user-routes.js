const express = require("express");
const userRoutes = express.Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

const passport = require("passport");

userRoutes.get("/signup", (req, res, next) => {
  res.render("User/signup");
});

userRoutes.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "" || password === "") {
        res.render("User/signup", { message: "Indicate username and password" });
        return;
    }

    User.findOne({ username })
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
            res.redirect('/');

        })
        .catch((err)=>{
            next(err);
        });

    });
   
});





userRoutes.get('/login', (req, res, next)=>{  
    res.render('User/login', { "message": req.flash("error") })
})


userRoutes.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  }));

  userRoutes.get('/logout', (req, res, next)=>{
    req.logout();
    res.redirect("/login");
  })






module.exports = userRoutes;