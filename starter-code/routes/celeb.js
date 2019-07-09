const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')
const Movie = require("../models/movies")

router.get('/',(req,res,next)=>{
  if(req.user){

    Celeb.find()
    .then((allCelebs)=>{
      res.render("celebrities/index",{theCelebs: allCelebs})
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
router.get('/new',(req,res,next)=>{
  res.render("celebrities/new")
})
router.post('/',(req,res,next)=>{
  const {name, occupation, catchPhrase}= req.body;
  let newCeleb = {
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  }
  Celeb.create(newCeleb)
  .then(()=>{
    req.flash('success','Successfully created celeb!')
    res.redirect("/celebrities")
  })
  .catch((err)=>{
    next(err);
  })
})
router.post("/:id/delete",(req,res,next)=>{
  Celeb.findByIdAndDelete(req.params.id)
  .then(()=>{
    req.flash('success','Deleted celeb!')
    res.redirect("/celebrities")
  })
  .catch((err)=>{
    next(err);
    console.log(err);
  })
})
router.get("/:id/edit",(req,res,next)=>{
  Celeb.findById(req.params.id)
  .then((oneCeleb)=>{
    res.render("celebrities/editCeleb",{theCeleb: oneCeleb})
  })
  .catch((err)=>{
    next(err);
  })
})
router.post("/update/:id",(req,res,next)=>{
  let id = req.params.id;
  Celeb.findByIdAndUpdate(id, req.body)
  .then(()=>{
    req.flash('success','updated the celeb!')
    res.redirect("/celebrities/details/"+id)
  })
  .catch((err)=>{
    next(err);
  })
})


module.exports = router;