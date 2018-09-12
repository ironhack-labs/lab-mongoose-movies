const express    = require('express');
const router     = express.Router();
const User       = require('../models/User')
const bcrypt     = require('bcryptjs')

// const bcryptSalt = 10;
const passport = require('passport');

router.get('/signup', (req, res, next)=>{
  res.render('userViews/signup')
})

router.post('/signup', (req, res, next)=>{
  const username = req.body.username
  const password = req.body.password

  if (username === "" || password === "") {
    req.flash('error', 'please specify a username and password to sign up')
    res.render("userViews/signup", { message: req.flash("error") });
      return;
  }

  User.findOne({username })
  .then(user => {
      if (user !== null) {
        req.flash('error', 'the username already exists')
        res.render("userViews/login", { message: req.flash("error") });
    return;
    }

    const saltRounds = 10;
    const salt  = bcrypt.genSaltSync(saltRounds);
    // const thePassword = req.body.password;
    const hash = bcrypt.hashSync(password, salt);

    User.create({
        username: username,
        password: hash
    })
    .then((result)=>{
        res.redirect('/');
    }).catch((err)=>{
      res.render("userViews/signup", { message: req.flash("error") });
    })
  }).catch((err)=>{
    next(err);
  })
});


router.get('/login', (req, res, next)=>{
  res.render('userViews/login', {message: req.flash('error')})
})

router.post('/login', passport.authenticate('local', {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  successFlash: true,
  passReqToCallback: true
}));

// long way without PASSPORT:
// router.post('/login', (req, res, next)=>{
//   const username = req.body.username;
//   const password = req.body.password;

//   if (username === "" || password === "") {
//       res.render("userViews/login", {
//         errorMessage: "Please fill in your username and password"
//       });
//       return;
//     }

//     User.findOne({ "username": username })
//     .then(user => {
//         if (!user) {
//           res.render("userViews/login", {
//             errorMessage: "Sorry, that username doesn't exist"
//           });
//           return;
//         }
//         if (bcrypt.compareSync(password, user.password)) {
//           // Save the login in the session!
//           req.session.currentUser = user;
//           res.redirect("/");
//         } else {
//           res.render("userViews/login", {
//             errorMessage: "Incorrect password"
//           });
//         }
//     })
//     .catch(error => {
//       next(error)
//     })
// })
// without PASSPORT
// router.get("/logout", (req, res, next) => {
//   req.session.destroy((err) => {
//     // cannot access session here
//     res.redirect("/login");
//   });
// });


router.get('/logout', (req, res, next)=>{
      req.logout()
    res.redirect('/')
})


module.exports = router;