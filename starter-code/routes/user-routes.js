const express    = require('express');
const router     = express.Router();
const User       = require('../models/User');
const bcrypt     = require('bcryptjs');
const bcryptSalt = 10;



router.get('/signup', (req, res, next) => {
  res.render('users/signup');
});

router.post('/signup', (req, res, next)=> {
  const theUsername = req.body.theUsername;
  const thePassword = req.body.thePassword;

  if(theUsername === "" || thePassword === ""){
    res.redirect('/');
    return;
  }

  User.findOne({username: theUsername })
        .then(user => {
                if (user !== null) {
                    res.render("signup", {
                        errorMessage: "Sorry, that username is taken."
                    });
                    return;
                    }
        


            const salt     = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(thePassword, salt);


            User.create({username: theUsername, password: hashPass})
            .then(()=>{
                res.redirect('/');
            })
            .catch((err)=>{
                next(err);
    })

    
    });

});

router.get('/login', (req, res, next)=> {

  res.render('users/login');
});

router.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;


  if (username === "" || password === "") {
    res.render("/", {errorMessage: "Indicate a username and a password to sign up"});
    return;
  }

  User.findOne({username: username })
  .then(user => {
      if (!user) {
        res.render("signup", {errorMessage: "Sorry, that username doesn't exist"});
        return;
      }



      if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;



        res.redirect("signup");
      } else {
        res.render("login", {
          errorMessage: "Incorrect password"
        });
      }

  })
  .catch(error => {
    next(error)
  })
});

module.exports = router;