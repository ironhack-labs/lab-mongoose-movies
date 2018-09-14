const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie');


router.get ('/celebrities/index', (req, res, next)=>
{
  Celebrity.find().populate('movies')
  .then((ret) => {
    console.log(ret)
    res.render('celebrities/index', {listOfCelebs: ret})
  })
  .catch(next)
  
})


router.get ('/celebrities/new', (req, res, next)=>
{  
   Movie.find()
  .then((ret) => {
    console.log(ret);
    res.render('celebrities/new', {movies: ret})
  })
  .catch(next)
})



router.post('/celebrities/update/:celebID', (req, res, next)=> {

  let theName = req.body.celebName;
 let  theOccupation = req.body.celebOccupation;
  let theCatch = req.body.celebCatchphrase;
  let theMovie = req.body.celebMovie;

  Celebrity.findByIdAndUpdate(req.params.celebID, {

    name: theName,

    occupation: theOccupation,

    catchphrase: theCatch,

    $push:  {movies: theMovie},
})
  .then((ret)=> {
    // console.log(theMovie)
    Movie.findByIdAndUpdate(theMovie, 
      {$push: {stars: req.params.celebID}
    })
    .then((response)=> {
      res.redirect('/movies/index')
    })
  })
  .catch((err)=>{
    console.log(err);
    next();
  })
})


router.get ('/celebrities/edit/:id', (req, res, next)=> {
    Celebrity.findById(req.params.id)
    .then((ret)=> {
      Movie.find()
    .then((allTheMovies)=>{
      res.render('celebrities/edit', {Celebrity: ret, movies: allTheMovies});
      console.log(allTheMovies)
      // res.render('celebrities/edit', {Celebrity: ret})
    })
})
});


router.get ('/celebrities/:id', (req, res, next)=> 
{
  console.log(req.params.id);
  Celebrity.findById(req.params.id)
  .then((ret) => {
    console.log(ret)
    res.render('celebrities/show', {celeb: ret})
  })
  .catch(next)
})

router.post('/celebrities/create', (req, res, net)=> {
 let newName = req.body.celebName;
 let newOcc = req.body.celebOccupation;
 let newCatch = req.body.celebCatchphrase;
 let newMovie = req.body.celebMovie

 Celebrity.create({
   name: newName,
   occupation: newOcc,
   catchphrase: newCatch,
   movies: [newMovie],

 })
 .then((ret)=> {
   res.redirect('/celebrities/index')
 })
 .catch((err)=> {
   next(err)
 })
})

router.post('/celebrities/:id/delete', (req, res, next)=> {
  Celebrity.findByIdAndRemove(req.params.id)
  .then((ret)=> {
    res.redirect('/celebrities/index')
  })
  .catch(next)
  })

module.exports = router;