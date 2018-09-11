const express    = require('express');
const router     = express.Router();
const User       = require('../models/User')
const bcrypt     = require('bcryptjs')

router.get('/signup', (req, res, next)=>{
  res.render('userViews/signup')
})

router.post('/signup', (req, res, next)=>{
  const username = req.body.username
  const password = req.body.password

  if (username === "" || password === "") {
      res.render("userViews/signup", {
        errorMessage: "Indicate a username and a password to sign up"
      });
      return;
    }



    User.findOne({ "username": username })
    .then(user => {
        if (user !== null) {
          res.render("userViews/signup", {
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
      res.redirect('/movies');
  })
  .catch((err)=>{
      next(err);
  })
  })
})


router.get('/login', (req, res, next)=>{
  res.render('userViews/login')
})



router.post('/login', (req, res, next)=>{
  const username = req.body.username;
  const password = req.body.password;

  if (username === "" || password === "") {
      res.render("userViews/login", {
        errorMessage: "Please fill in your username and password"
      });
      return;
    }

    User.findOne({ "username": username })
    .then(user => {
        if (!user) {
          res.render("userViews/login", {
            errorMessage: "Sorry, that username doesn't exist"
          });
          return;
        }
        if (bcrypt.compareSync(password, user.password)) {
          // Save the login in the session!
          req.session.currentUser = user;
          res.redirect("/");
        } else {
          res.render("userViews/login", {
            errorMessage: "Incorrect password"
          });
        }
    })
    .catch(error => {
      next(error)
    })



})


router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/login");
  });
});










module.exports = router;