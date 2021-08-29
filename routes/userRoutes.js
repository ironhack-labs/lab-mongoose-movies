const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

const bcrypt = require("bcryptjs");
const saltRounds = 10;

router.get("/register", (req, res, next) => {
  // console.log("Boo!")
  res.render("user/userCreate");
});

router.post("/userCreate", (req, res) => {
  const salt = bcrypt.genSaltSync(saltRounds);

  const hash1 = bcrypt.hashSync(req.body.password, salt);

  User.create({ username: req.body.username, password: hash1 }).then(() => {
    res.redirect("/index");
  });
});

// router.get('/user/:theID', (req, res) => {

//   req.params.theID // ==> 61052265119dbf8593258766

//   User.findById(req.params.theID)
//     .then((oneUser) => {
//       // console.log('Retrieved film from DB:', oneFilm)
//       res.render('locations/show.hbs', { oneUser: oneUser });
//       // res.send(oneFilm)
//     })
// });

router.get("/testtest", (req, res) => {
  res.render("locations/show");
});

// LOGIN FLOW
router.get("/login", (req, res) => {
  res.render("user/login");
});

router.get("/userprofile", (req, res) => {
  if (!req.session.currentUser) {
    res.send("user not found - go to login and log in");
  } else {
    //req.session.currentUser.username
    res.render("userprofile", { theUsername: req.session.currentUser.username });
  }
});

router.post("/login-the-user", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      res.send("user not found");
    }
    //user.password // from db (hashed)
    //req.body.password // from browser
    if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.currentUser = user;
      res.redirect("/userprofile");
    } else {
      res.send("password not correct");
    }
  });
});

// router.get('/locations/:theID', (req, res) => {

//   req.params.theID // ==> 61052265119dbf8593258766

//   Locations.findById(req.params.theID)
//     .then((oneCeleb) => {
//       // console.log('Retrieved film from DB:', oneFilm)
//       res.render('locations/show.hbs', { oneCeleb: oneCeleb });
//       // res.send(oneFilm)
//     })
// });

module.exports = router;
