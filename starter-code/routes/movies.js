const express   = require('express');
const router    = express.Router();
const Movie     = require('../models/Movie');
const Celebrity = require("../models/Celebrity");
const User      = require("../models/User")

router.get('/', (req, res, next) => {
  if(req.user) {
    Movie.find()
    .then((movieList)=>{
        res.render('movies/index', {movies: movieList})
        return
    })
    .catch((err)=>{
        next(err);
    })
  } else {
  req.flash("error", "You need to be logged in to see the movies.")
  res.redirect("/")
  }
});


router.get('/new', (req, res, next) => {
  if(req.user.admin) {
    Celebrity.find()
    .then((celebrities)=>{
      res.render('movies/new', {celebrities}); 
    })
    .catch((err)=>{
      next(err)
    })
  } else {
  req.flash("error", "You need to be an admin to add a new movie.")
  res.redirect("/")
  }
});

router.post("/", (req, res, next) => {
  User.findOne({username: req.user.username})
  .then((user)=>{
    req.body.owner = user._id;
    Movie.create(req.body)
    .then(()=>{
      res.redirect("/movie")
    })
    .catch(()=>{
      res.redirect('/movie/new');
    })
  })
  .catch((err)=>{
    nex(err)
  })
  
})

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect("/movie")
  })
  .catch((err)=>{
    next(err)
  })
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movie)=>{
    Celebrity.find()
    .then((celebrityList)=>{
      celebrityList.forEach((celebrity)=>{
        if(celebrity._id.equals(movie.star)){
          celebrity.selected = true;
        }
      })
      res.render('movies/edit', {movie: movie, celebrities: celebrityList});
    })
    .catch((err)=>{
      next(err)
    })
  })
  .catch((err)=>{
      next(err);
  })
});

router.post("/:id", (req, res, next)=>{
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.redirect("/movie");
  })
  .catch((err)=>{
    next(err);
  })
})


router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id).populate('star').populate("owner")
  .then((movie)=>{
    console.log(movie)
      res.render('movies/show', movie)
  })
  .catch((err)=>{
      next(err);
  })
});

module.exports = router;