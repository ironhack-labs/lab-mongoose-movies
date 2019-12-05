const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
// router.get('/', (req, res, next) => {
//     res.render('movieIndex')
// });

router.get('/all-movies', (req, res, next)=>{
  Movie.find()
  .then((allTheMovies)=>{
    res.render('movie-views/movies', {theMovie: allTheMovies});
  })
  .catch((err)=>{
    next(err);
  })
  
})

router.get('/add-new-movie', (req, res, next)=>{
  res.render('movie-views/new');
})


router.post('/create-the-movie', (req, res, next)=>{
  let theTitle = req.body.newMovieTitle;
  let theDirector = req.body.newMovieDirector;
  let theDescription = req.body.newMovieDescription;
  let theImage = req.body.newMovieImage;

  
 Movie.create({
    title: theTitle,
    director: theDirector,
    description: theDescription,
    image: theImage
  })
  .then((response)=>{
    res.redirect('/all-movies')
  })
  .catch((err)=>{
    next(err)
  })


})

router.get('/movies/:theIdOfTheMovie', (req, res, next)=>{
  let id = req.params.theIdOfTheMovie;

  Movie.findById(id)
  .then((theMovie)=>{
    res.render('movie-views/singleMovie', {movie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })

})

router.get('/movies/edit/:randomVariableIMadeToHoldTheID', (req, res, next)=>{

  Movie.findById(req.params.randomVariableIMadeToHoldTheID)
  .then((theMovie)=>{

    

    res.render('movie-views/edit', {theActualMovie: theMovie})

  })
  .catch((err)=>{
    next(err);
  })
})


router.post('/movies/update/:id', (req, res, next)=>{
  let id = req.params.id;
//   id = req.body.theID;
  
  let update = {...req.body, _id: id};
 
  
  
  // this stupid {new:true} thing is so that after we edit the book the response we get back shows us the new info isntead of the old info, not sure why this isnt the default
  Movie.findByIdAndUpdate(id, update, {new: true})
  .then((response)=>{
    console.log(response)
    res.redirect('/movies/'+id)
  })
  .catch((err)=>{
    next(err)
  })
})



router.post('/movies/delete/:theID', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.theID)
  .then((response)=>{
    res.redirect('/all-movies');
  })
  .catch((err)=>{
    next(err)
  })

})



module.exports = router;

