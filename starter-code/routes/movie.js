const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')
const Movie = require("../models/movies")

router.get('/',(req,res,next)=>{
  if(req.user){
    Movie.find()
    .then((allMovies)=>{
      res.render("movies/index",{theMovies: allMovies})
    })
    .catch((err)=>{
      next(err);
    })
} else {
  req.flash("error","Sorry, you must be logged in to use that feature please log in") 
  res.redirect('/User/login')
}
})
router.get('/details/:id',(req,res,next)=>{
  Movie.findById(req.params.id).populate('actor')
  .then((theMovie)=>{
    res.render("movies/details",{oneMovie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })
})
router.get('/new',(req,res,next)=>{
  Celeb.find()
  .then((allCelebs)=>{ 
    res.render("movies/new",{theOptions: allCelebs})
  })
  .catch((err)=>{
    next(err);
  })
})
router.post('/',(req,res,next)=>{
  const {title, genre, plot,actor}= req.body;
  let arr = [];
  actor.forEach((e)=>{
    if(e !== 'null'){
      arr.push(e);
    }
  })
  let newMovie = {
    title: title,
    genre: genre,
    plot: plot,
    actor: arr
  }
  Movie.create(newMovie)
  .then(()=>{
    req.flash('success', 'Movie Added Succesfully!!')
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err);
  })
})
router.post("/:id/delete",(req,res,next)=>{
  Movie.findByIdAndDelete(req.params.id)
  .then(()=>{
    req.flash('success','movie deleted!')
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err);
    console.log(err);
  })
})
router.get("/:id/edit",(req,res,next)=>{
  Celeb.find()
  .then((celebs)=>{
  Movie.findById(req.params.id)
  .then((oneMovie)=>{
    res.render("movies/editMovie",{theMovie: oneMovie, theCelebs: celebs})
  })
  .catch((err)=>{
    next(err);
  })
})
})
router.post("/update/:id",(req,res,next)=>{
  let id = req.params.id;
  let actor = req.body.actor
  let arr = [];
  actor.forEach((e)=>{
    if(e !== 'null'){
      arr.push(e);
    }
  })
  const obj = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    actor: arr
  }




  Movie.findByIdAndUpdate(id, obj)
  .then(()=>{
    req.flash('success','movie updated!')
    res.redirect("/movies/details/"+id)
  })
  .catch((err)=>{
    next(err);
  })
})


module.exports = router;