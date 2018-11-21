const express              = require('express');
const router               = express.Router();
          
          
          
const User                 = require('../models/User');
          
const bcrypt               = require('bcryptjs');
const bcryptSalt           = 10;
          
          
const passport             = require('passport');
          
const Movie                = require('../models/Movie');


const uploader             = require('../config/cloud');



// API




router.get('/api/users', (req,res,next)=>{

  if(req.user){

    User.find()
    .then((eachUser)=>{
      res.json(eachUser);
    })
    .catch((err)=>{
      next(err)
    })
  }
})


router.get('/signup', (req,res,next)=>{
  res.render('signup' , {message : req.flash('error')})
});


router.post('/signup', uploader.single('the-picture'), (req,res,next)=>{

  User.findOne({username: req.body.username})
  .then((theUser)=>{
    if(theUser!==null){
      req.flash('error', 'sorry, that username is taken')
      res.redirect('/signup')
    }
    const salt    = bcrypt.genSaltSync(10);
    const theHash = bcrypt.hashSync(req.body.password, salt);

    User.create({
      username: req.body.username,
      password: theHash,
      admin: false,
      profilePic: req.file.url

    })
    .then((theUser)=>{
      req.login(theUser, (err)=>{
        if (err){
          req.flash('error', 'something went wrong with auto login, please log in manually')
          res.redirect('/login')
          return;
        }
        res.redirect('/profile')

      });
    })
    .catch((err)=>{
      next(err);
    })

  })
  .catch((err)=>{
    next(err);
  })

  }); 


  router.get('/profile', (req,res,next)=>{
    Movie.find({watcher:req.user._id})
    .then((watcher)=>{
      res.render('profile', {user: req.user, movie: watcher })
    })
    .catch((err)=>{
      next(err);
    })
  })

   //End of POST 


router.get('/login', (req, res, next)=>{
  if(req.user){
    req.flash('error', 'you are alredy logged in')
    res.redirect('/')
  }
  else{

    res.render('login', {message: req.flash('error')})
  }
  });


  // POST LOGIN
router.post('/login', passport.authenticate("local", {

  successRedirect: "/",
  failureRedirect: '/signup',
  failureFlash: true,
  passReqToCallback: true

}));


// (req,res,next)=>{
//     const username = req.body.username;
//     const password = req.body.password;
    

// if(username === "" || password === "")
// {
//   res.render("login" , {errorMessage: "Indicate a username and a password to login"})
//   return;
// }
// User.findOne({username:username})
// .then((user)=>{
//   if(!user)
//   {
//     res.render('login', {errorMessage: "Sorry, that username does not exist"})
//     return;
//   }
//    if(bcrypt.compareSync(password, user.password))
//    {
//      req.session.currentUser = user;
//      res.redirect("/");
//    }
//    else 
//    {  
//      res.render('login', {errorMessage : "Incorrect password"});
//    }

// })
// .catch((err)=>{
//   next(err);
// })

// });    //END OF POST 


router.get('/logout', (req,res,next)=>{

  req.logout();
  res.redirect('/login')

  // req.session.destroy((err)=>{
  //     res.redirect('/login')
  // })
  
})


router.get('/secret', (req, res, next) => {

  if(!req.user){
    res.render('login', {message:'You have to be logged in'});
    return;
  }
  
  else if(!req.user.admin){
    res.render('index', {message:'You have to be admin'})
    return;
  }

  else {
    res.render('secret' ,{theUser: req.user})
  }


});




module.exports = router;