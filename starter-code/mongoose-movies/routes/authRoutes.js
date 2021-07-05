const express    = require('express');
const userRouter = express.Router();
const User       = require('../models/user');
const bcrypt     = require('bcryptjs');

//--------------------------------UserGET---------------------------------------------------------------------
// Routes for displaying my sign up page this will be the get
userRouter.get('/signup', (req, res, next)=>{
  res.render('users/signupPage');
});
//------------------------------------------------------------------------------------------------------------

//-----------------------------Start of POst-----------------------------------------------------------
// Route for displaying signup page this will be the postRoute, this has a password so lets use BCRYPT
userRouter.post('/signup', (req, res, next)=>{
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;

  if(thePassword === "" || theUsername === ""){
    res.render('users/signupPage', {errorMessage: "Please input a username or password to continue."});
    return;
  }

  User.findOne({'username': theUsername})
  .then((response)=>{
    if(response !== null){
      res.render('users/signupPage', {errorMessage: `Sorry ${theUsername} is taken, please select another name.`});
      return;
    } //ends IF statement

    const salt        = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(thePassword, salt);

    //now we create users/password objects
    User.create({username: theUsername, password: hashedPassword})
    .then((response)=>{
      console.log("---------------------------------------------");
      res.redirect('/');
    })
    .catch((err)=>{
      next(err);
    });

  });

});
//-----------------------------END OF POST-------------------------------------------------

userRouter.get('/login', (req, res, next)=>{
  res.render('users/loginPage');
});





userRouter.post('/login', (req, res, next)=>{
  const theUsername = req.body.theUsername;
  const thePassword = req.body.thePassword;

  if (theUsername === "" || thePassword === "") {
  res.render("users/loginPage", {
    errorMessage: "Indicate a username and a password to sign up"
  });
  return;
  }


   User.findOne({ "username": theUsername }, (err, user) => {
       if (err || !user) {
         res.render("users/loginPage", {
           errorMessage: "The username doesn't exist"
         });
         return;
       }
       if (bcrypt.compareSync(thePassword, user.password)) {
         // Save the login in the session! above returns a true or false value

         req.session.currentUser = user;
         console.log(req.session.currentUser);
         //this line logs the user into the page. currentUser is a variable to hold the user.
         res.redirect("/");
       } else {
         res.render("users/loginPage", {
           errorMessage: "Incorrect password"
         });
       }
   });
 });

userRouter.get("/logout", (req, res, next)=>{
  req.session.destroy((err) =>{
    res.redirect("/login");
  });
});



module.exports = userRouter;
