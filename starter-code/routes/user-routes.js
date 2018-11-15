const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt  = require('bcryptjs');
const bcryptSalt = 10;



router.get('/signup', (req,res,next)=>{
  res.render('signup')
});


router.post('/signup', (req,res,next)=>{
  const theUserName = req.body.theUserName;
  const thePassWord = req.body.thePassWord;

  if(theUserName === "" || thePassWord==="")
  {
    res.render("signup", {errorMessage: "Indicate a username and a password to sign up"});
    return;
  }

  User.findOne({username: theUserName})
  .then(user =>{
    if(user !== null){
      res.render("signup", {errorMessage: "Sorry, that username is already taken"})
      return;
    }

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(thePassWord, salt);
  
  User.create({username: theUserName, password:hashPass})
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  });

  });     // End of FIND


  });    //End of POST 


router.get('/login', (req, res, next)=>{
  res.render('login');
  });

router.post('/login', (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    

if(username === "" || password === "")
{
  res.render("login" , {errorMessage: "Indicate a username and a password to login"})
  return;
}
User.findOne({username:username})
.then((user)=>{
  if(!user)
  {
    res.render('login', {errorMessage: "Sorry, that username does not exist"})
    return;
  }
   if(bcrypt.compareSync(password, user.password))
   {
     req.session.currentUser = user;
     res.redirect("/");
   }
   else 
   {  
     res.render('login', {errorMessage : "Incorrect password"});
   }

})
.catch((err)=>{
  next(err);
})

});    //END OF POST 


router.get('/logout', (req,res,next)=>{
  req.session.destroy((err)=>{
      res.redirect('/login')
  })
  
})

router.get('/secret', (req, res, next) => {
  if(req.session.currentUser){
    res.render('secret', {theUser: req.session.currentUser});
  } else{
    res.redirect('/login');
  }
});




module.exports = router;