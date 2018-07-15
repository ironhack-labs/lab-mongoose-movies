const express = require('express');
const router = express.Router();

// const session = require('express-session');

// const MongoStore = require('connect-mongo')(session);



// REQUIRING IN BCRYPT MODULE

const bcrypt = require('bcryptjs');


const User = require('../models/user');

// GET ROUTE FOR SIGNUP PAGE

router.get('/users/signup', (req,res,next)=>{

    res.render('users/signupPage');

});

// GET ROUTE FOR LOGIN PAGE

router.get('/users/login', (req,res,next)=>{

    res.render('users/loginPage');

});

// POST ROUTE FOR LOGIN PAGE

router.post('/users/login', (req,res,next)=>{

    const theUsername = req.body.theUsername;
    const thePassword = req.body.thePassword;

    console.log(req.body.theUsername);
    console.log(req.body.thePassword);
    
    if (theUsername === "" || thePassword === "") {
        res.render("users/loginPage", {errorMessage: "Indicate a username and a password to sign up"});
        return;
    }
    
    User.findOne({ "username": theUsername }, (err, user) => { // <-- CHECKING TO SEE IF THE USERNAME ENTERED MATCHES ANYTHING IN THE DB
        if (err || !user) {
          res.render("users/loginPage", {errorMessage: "The username doesn't exist"});
          return;
        }
        if (bcrypt.compareSync(thePassword, user.password)) { // <-- CHECKS TO SEE IF THE PW ENTERED MATCHES THAT USERNAME; IF NO PW ENTERED, WILL ALWAYS FAIL
          // Save the login in the session!
          req.session.currentUser = user; // <-- CREATES A NEW SESSION BY CREATING A COPY OF THE USER DOCUMENT IN THE DB
        //   console.log(`******************* PASSWORD VALIDATION SUCCESS, USER OBJECT: ${user}, REQ.SESSION.CURRENTUSER: ${req.session.currentUser}`);
          res.redirect("/");
        } else {
          res.render("users/loginPage", {
            errorMessage: "Incorrect password"
          });
        }
    });

});

// POST ROUTE FOR CREATING A NEW ACCOUNT + FILTERS TO CHECK FOR EMPTY FIELDS AND UNIQUE 

router.post('/users/signup', (req,res,next)=>{

    const theUsername = req.body.newUsername;
    const thePassword = req.body.newPassword;

    if(thePassword === "" || theUsername === ""){

        res.render('users/signupPage', {errorMessage: 'FILL IN ALL FIELDS - OR ELSE'});
        return;

    }

    User.findOne({username: theUsername})
        .then((response)=>{

            if (response !== null){

                res.render('users/signupPage', {errorMessage: `Sorry, the username ${theUsername} is not available.`});
                return;

            }


            const salt = bcrypt.genSaltSync(10);
            
            const hashedPassword = bcrypt.hashSync(thePassword, salt);

            User.create({username: theUsername, password: hashedPassword})
                .then((response)=>{

                    res.redirect('/');

                })
                .catch((err)=>{

                    console.log(err);
                    next(err);

                });

        });
});

// GET ROUTE FOR LOGGING OUT -- COULD ALSO BE A POST ROUTE

router.get("/logout", (req, res, next) => {

    req.session.destroy((err) => {
      // cannot access session here
      res.redirect("/");
    });
  });


module.exports = router;