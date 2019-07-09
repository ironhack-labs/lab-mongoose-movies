const User    = require('../models/user');
const bcrypt  = require('bcryptjs');
const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')
const Movie = require("../models/movies")


router.get('/signup', (req, res, next)=>{

  res.render('User/signup');

})
router.post('/signup', (req, res, next)=>{

  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;

  const salt = bcrypt.genSaltSync(12);
  const hashedPassWord =  bcrypt.hashSync(thePassword, salt);

  User.create({
      username: theUsername,
      password: hashedPassWord
  })
  .then(()=>{
      console.log('yay');
      res.redirect('/')
  })
  .catch((err)=>{
      next(err);
  })
})

router.get('/login', (req, res, next)=>{
  if(req.session.errorCount <= 0){
    req.session.errorMessage = null;
  }
  req.session.errorCount -=1;
// you can do this in every single route manually, 
// or you can make your own middleware function and call that function in all the routes
// or you can use flash messages


  res.render('User/login', {error: req.session.errorMessage})
})

router.post('/login', (req, res, next)=>{

  const password = req.body.thePassword;
  const username = req.body.theUsername;


User.findOne({ "username": username })
.then(user => {
    if (!user) {
        req.session.errorMessage = "sorry, no one with that username found";
        req.session.errorCount = 1
        res.redirect('/User/login');
    }
    if (bcrypt.compareSync(password, user.password)) {
      console.log('here')
      req.session.currentUser = user;
      res.redirect('/');
  
    } else {

      req.session.errorMessage = 'wrong password';
      req.session.errorCount = 1;
      res.redirect('/User/login');
    }
})
.catch(error => {
  next(error);
})

})

router.get('/profile', (req, res, next)=>{
 
  if(req.session.currentUser){
    User.findById(req.session.currentUser._id).populate("favMovies").populate("favCelebs")
    .then((blah)=>{
      res.render('User/profile', {user: blah})
    })
    .catch((err)=>{
      next(err);
    })
  } else {
      req.session.errorCount = 1;
      req.session.errorMessage = "Sorry, you must be logged in to use that feature please log in"
      res.redirect('/User/login')
  }
})

router.post('/logout', (req, res, next)=>{
  
  req.session.destroy()

  res.redirect('/')

})
router.post('/delete/:id',(req,res,next)=>{
  
})
router.post("/addCeleb/:id",(req,res,next)=>{
  Celeb.findById(req.params.id)
  .then((celeb)=>{
    User.findById(req.session.currentUser._id)
    .then((user)=>{
      user.favCelebs.push(celeb);
      user.save();
      res.redirect("/celebrities")
    })
    .catch((err)=>{
      next(err);
    })
  })
  .catch((err)=>{
    next(err);
  })

})
router.post("/addMovie/:id",(req,res,next)=>{
  Movie.findById(req.params.id)
  .then((movie)=>{
    User.findById(req.session.currentUser._id)
    .then((user)=>{
      user.favMovies.push(movie);
      user.save();
      res.redirect("/movies")
    })
    .catch((err)=>{
      next(err);
    })
  })
  .catch((err)=>{
    next(err);
  })
})



module.exports = router;




