const express = require('express');
const router  = express.Router();
const Celeb = require('../model/Celebrity');
const Movie = require('../model/Movies')
const User  = require("../model/user");
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);

//For session Login
router.use((req, res, next) => {
    if (req.session.currentUser) { 
      next(); 
    } else {                          
      res.redirect("/login");        
    }                              
  });  

//Get All Movies
router.get('/movies', (req, res, next)=>{
    Movie.find()
    .then((data)=>{
      res.render('movies/index',{data})
    })
    .catch((err)=>{
      next(err);
    })
  })
  
  //Get Single Movie
  router.get('/movies/movieInfo/:id', (req, res, next)=>{
  
    let movieid = req.params.id;
    Movie.findById(movieid).populate('aStar')
    .then((singleMovie)=>{
  
      res.render('movies/movieinfo', {singleMovie})
  
    })
    .catch((err)=>{
      next(err);
    })
  
  })
  
  //Add New Movie Form
  router.get('/movies/addnew', (req, res, next)=>{    
    Celeb.find()
    .then((allCelebs)=>{
        res.render('movies/addnew', {allCelebs})
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
  })
  
  
  //New Movie Item 
  router.post('/movies', (req, res) => {
    const {title, aStar, genre, plot} = req.body;
    const movieModel = new Movie ({title,aStar,genre,plot});
    console.log(movieModel);
   movieModel.save()
   .then((insertMovie)=>{
  
     if (!insertMovie.title || !insertMovie.plot || !insertMovie.genre) {
    
       return res.status(400).json({ msg: 'Please include a name, email and catchPhrase' });
     }
     res.redirect('/');
   })
  
  
  });
  
  
  //Delete Movies
  
  router.post('/movies/remove/:id', (req, res, next)=>{
  
    let movieId = req.params.id;
    Movie.findByIdAndRemove(movieId)
    .then(()=>{
  
     res.redirect('/');
  
    })
    .catch((err)=>{
  
      next(err);
     
    })
  
  })
  
  //Update Movie view Two variables for the view
  router.get('/movies/editMovies/:id', (req, res, next)=>{
    Movie.findById(req.params.id)
    .then((mEdit)=>{
            // res.render('movies/editMovies', {mEdit})
            Celeb.find()
            .then((theCeleb)=>{
              res.render('movies/editMovies', {theCeleb, mEdit})
            })
          })
          .catch((r)=>{
            next(r)
          })
    .catch((err)=>{
        next(err);
    })
  })
  
  //Update Movie Entry
  router.post('/movies/updateMovie/:id', (req, res, next)=>{
    let movieID = req.params.id;
    Movie.findByIdAndUpdate(movieID, req.body)
    .then((movieUpdate)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        next(err);
    })
  })
  
  
  router.get('/movies/allactormovies', (req, res, next)=>{
    Movie.find({name: req.params.name})
    .then((data)=>{
      console.log(data[0])
      res.render('movies/allactormovies',{name:data[0]})
    })
    .catch((err)=>{
      next(err);
    })
  })

  module.exports = router;
