const express = require("express");
const router = express.Router();

const User = require('../models/User');
const bcrypt = require('bcryptjs');


// sign up route
router.get('/signup', (req,res,next) =>{

res.render('user-views/signup')
})

// post signup route to DB

router.post('/signup', (req,res,next) =>{

  const username = req.body.theUsername;
  const password = req.body.thePassword;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  USer.create({
    username: username,
    password: hash
  })
  .then(()=>{
  
  res.redirect('/')

})
.catch((err) =>{
  next(err)
})
})



// login get route
router.get('/login', (req,res,next) =>{

  res.render('user-views/login')
})

//login post route

router.post('login', (req, res, next)=>{

  const username = req.body.theUsername;
  const password = req.body.thePassword;

  USer.findOne({username: username})
  .then(userFromDB => {
    // if user is not a user in the database, redirect to        // homepage
    if(!userFromDB){
      res.redirect('/');
    }
    if(bcrypt.comapreSync(password, userFromDB.password)){
      req.session.currentUser = userFromDB;

      res.redirect('/')
    }else{
      res.redirect('/')
    }
  })
  .catch(error =>{
    next(error);
  })
})


// logout POST route
router.post('/logout', (req,res,next)=>{
  // literally destroys the session
  req.session.destroy(); 
  res.redirect('/');
})


// User-only private page
router.get('/secret', (req,res,next)=>{

  if(req.session.currentUser){
    res.render('user-views/secret', {theUser: req.session.currectUser})
  }else{
    res.redirect('/')
  }
})

module.exports = router;