const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')
const Movie = require("../models/movies")
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/celebrities',(req,res,next)=>{
  Celeb.find()
  .then((allCelebs)=>{
    res.render("celebrities/index",{theCelebs: allCelebs})
  })
  .catch((err)=>{
    next(err);
  })
})
router.get('/celebrities/details/:id',(req,res,next)=>{
  Movie.find({actor: req.params.id})
  .then((movieList)=>{
  Celeb.findById(req.params.id)
  .then((theCeleb)=>{
    res.render("celebrities/details",{oneCeleb: theCeleb, listOfMovies: movieList})
  })
  .catch((err)=>{
    next(err);
  })
})
})
router.get('/celebrities/new',(req,res,next)=>{
  res.render("celebrities/new")
})
router.post('/celebrities',(req,res,next)=>{
  const {name, occupation, catchPhrase}= req.body;
  let newCeleb = {
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  }
  Celeb.create(newCeleb)
  .then(()=>{
    res.redirect("/celebrities")
  })
  .catch((err)=>{
    next(err);
  })
})
router.post("/celebrities/:id/delete",(req,res,next)=>{
  Celeb.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect("/celebrities")
  })
  .catch((err)=>{
    next(err);
    console.log(err);
  })
})
router.get("/celebrities/:id/edit",(req,res,next)=>{
  Celeb.findById(req.params.id)
  .then((oneCeleb)=>{
    res.render("celebrities/editCeleb",{theCeleb: oneCeleb})
  })
  .catch((err)=>{
    next(err);
  })
})
router.post("/celebrities/update/:id",(req,res,next)=>{
  let id = req.params.id;
  Celeb.findByIdAndUpdate(id, req.body)
  .then(()=>{
    res.redirect("/celebrities/details/"+id)
  })
  .catch((err)=>{
    next(err);
  })
})
router.get('/movies',(req,res,next)=>{
  Movie.find()
  .then((allMovies)=>{
    res.render("movies/index",{theMovies: allMovies})
  })
  .catch((err)=>{
    next(err);
  })
})
router.get('/movies/details/:id',(req,res,next)=>{
  Movie.findById(req.params.id).populate('actor')
  .then((theMovie)=>{
    console.log(theMovie);
    res.render("movies/details",{oneMovie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })
})
router.get('/movies/new',(req,res,next)=>{
  Celeb.find()
  .then((allCelebs)=>{ 
    res.render("movies/new",{theOptions: allCelebs})
  })
  .catch((err)=>{
    next(err);
  })
})
router.post('/movies',(req,res,next)=>{
  const {title, genre, plot,actor}= req.body;
  let newMovie = {
    title: title,
    genre: genre,
    plot: plot,
    actor: actor
  }
  Movie.create(newMovie)
  .then(()=>{
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err);
  })
})
router.post("/movies/:id/delete",(req,res,next)=>{
  Movie.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err);
    console.log(err);
  })
})
router.get("/movies/:id/edit",(req,res,next)=>{
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
router.post("/movies/update/:id",(req,res,next)=>{
  let id = req.params.id;
  Movie.findByIdAndUpdate(id, req.body)
  .then(()=>{
    res.redirect("/movies/details/"+id)
  })
  .catch((err)=>{
    next(err);
  })
})
module.exports = router;
