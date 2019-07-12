const User    = require('../models/user');
const bcrypt  = require('bcryptjs');
const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')
const Movie = require("../models/movies")
const passport = require('passport');

router.get('/signup', (req, res, next)=>{

  res.render('User/signup');

})
router.post('/signup', (req, res, next)=>{

  const thePassword = req.body.password;
  const theUsername = req.body.username;

  const salt = bcrypt.genSaltSync(12);
  const hashedPassWord =  bcrypt.hashSync(thePassword, salt);

  User.create({
      username: theUsername,
      password: hashedPassWord
  })
  .then(()=>{
      req.flash('success','Account created!')
      res.redirect('/')
  })
  .catch((err)=>{
      next(err);
  })
})

router.get('/login', (req, res, next)=>{
  
// you can do this in every single route manually, 
// or you can make your own middleware function and call that function in all the routes
// or you can use flash messages


  res.render('User/login', {error: req.session.errorMessage})
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/User/login",
  failureFlash: true,
  passReqToCallback: true
}));
router.get('/profile', (req, res, next)=>{
 
  if(req.user){
    User.findById(req.user._id).populate("favMovies").populate("favCelebs")
    .then((blah)=>{
      res.render('User/profile', {user: blah})
    })
    .catch((err)=>{
      next(err);
    })
  } else {
      req.flash("error","Sorry, you must be logged in to use that feature please log in") 
      res.redirect('/User/login')
  }
})
  router.post('/logout', (req, res, next)=>{
    req.logout();
    req.flash('success','log out complete!')
    res.redirect("/User/login");
  })

router.post('/delete/:id',(req,res,next)=>{

})
router.post("/addCeleb/:id",(req,res,next)=>{
  Celeb.findById(req.params.id)
  .then((celeb)=>{
    User.findById(req.user._id)
    .then((user)=>{
      user.favCelebs.push(celeb);
      user.save();
      req.flash('success','Added celeb to your profile!')
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
    User.findById(req.user._id)
    .then((user)=>{
      user.favMovies.push(movie);
      user.save();
      req.flash('success','Added movie to your profile!')
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
router.get('/search',(req,res,next)=>{
  console.log("the query string ------- ", req.query)
  User.find( { "username": {$regex: `.*${req.query.search}.*`, '$options': `-i`}} )
  .then((userArr)=>{
    console.log("the user ========== ", userArr)
    Celeb.find( { "name": {$regex: `.*${req.query.search}.*`, '$options': `-i`}  } )
    .then((celebArr)=>{
      console.log("the celebs >>>>>>>>>>>> ", celebArr)
      Movie.find( { "title": {$regex: `.*${req.query.search}.*`, '$options': `-i`} } )
      .then((movieArr)=>{
        console.log("the movies ************* ", movieArr)
        res.render('User/search-results',{users: userArr, movies: movieArr, celebs: celebArr, search: req.query.search})
      })
      .catch((err)=>{
        next(err);
      })
    })
    .catch((err)=>{
      next(err);
    })
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/delete/movie/:id',(req,res,next)=>{
  let movieId = req.params.id;
  User.findById(req.user._id)
  .then((user)=>{
    user.favMovies.forEach((e,i)=>{
      if(e._id == movieId){
        user.favMovies.splice(i,1);
      }
    })
    user.save();
    req.flash('success','Deleted movie from your profile!')
    res.redirect("/User/profile")
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/delete/celeb/:id',(req,res,next)=>{
  let celebId = req.params.id;
  User.findById(req.user._id)
  .then((user)=>{
    user.favCelebs.forEach((e,i)=>{
      if(e._id == celebId){
        user.favCelebs.splice(i,1);
      }
    })
    user.save();
    req.flash('success','Deleted celeb from your profile!')
    res.redirect("/User/profile")
  })
  .catch((err)=>{
    next(err);
  })
})



module.exports = router;
