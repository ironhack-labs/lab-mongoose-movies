const express = require('express');
const router  = express.Router();
const User = require('../models/User.model');
const bcrypt         = require("bcryptjs");
const bcryptSalt     = 10;



// GET Render signup page
router.get("/signup", (req, res, next) => 
  res.render("user-views/signup")
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

  module.exports = router;