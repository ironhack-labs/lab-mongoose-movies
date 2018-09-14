const express    = require('express');
const router     = express.Router();
const User       = require('../models/User')
const bcrypt     = require('bcryptjs')
const passport = require('passport');
const nodemailer = require('nodemailer');

// const bcryptSalt = 10;

router.get('/signup', (req, res, next)=>{
  res.render('userViews/signup')
})

router.post('/signup', (req, res, next)=>{
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

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
        password: hash, 
        email:email,
    })

    .then((result)=>{
        sendWelcomeEmail(email,username); // send email
        res.redirect('/'); // original redirect
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


router.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]
}));

router.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/login",
  successRedirect: "/"
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

function sendWelcomeEmail (receipientEmail, recipientName){
    // send email------------------------------------------------
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'adjudicatearbitrate@gmail.com',
        pass: 'adjudicate' 
      }
    });
    transporter.sendMail({
      from: '"My Awesome Project 👻" <myawesome@project.com>',
      to: receipientEmail, 
      subject: 'Welcome to my amazing app', 
      text: `${recipientName} You just made the best decision of your life`,
      html: `<b>You just made the best decision of your life"</b>`
    },(error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    })
    // .then(info => res.render('message', {email, subject, message, info}))
    // .catch(err => console.log('email was not sent, because: .....',err)) // end of send email
}


module.exports = router;