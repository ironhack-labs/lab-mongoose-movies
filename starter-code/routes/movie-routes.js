const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
const Celeb  = require('../models/Celeb');
/* GET home page */
// router.get('/', (req, res, next) => {
//     res.render('movieIndex')
// });

router.get('/all-movies', (req, res, next)=>{
  Movie.find().populate('star')
  .then((allTheMovies)=>{
    if(req.session.currentUser){ 
        allTheMovies.forEach((thisMovie)=>{
          if(thisMovie.donor.equals(req.session.currentUser._id) || req.session.currentUser.admin){
            thisMovie.isMine = true;
          }
        })
      }
    res.render('movie-views/movies', {theMovie: allTheMovies});
  })
  .catch((err)=>{
    next(err);
  })
  
})

router.get('/add-new-movie', (req, res, next)=>{
    if(!req.session.currentUser){
        res.redirect('/login');
        return;
      }
      Celeb.find()
      .then((allCelebs)=>{
        res.render('movie-views/new', {allCelebs});
        //                            ^ this is the same as {allAuthors:allAuthors}
      })
      .catch((err)=>{
        next(err)
      })
    })
    


router.post('/create-the-movie', (req, res, next)=>{
    if(!req.session.currentUser){
        res.json({message: 'sorry hacker, not allowed'})
        return;
      }
  let theTitle = req.body.newMovieTitle;
  let theDirector = req.body.newMovieDirector;
  let theStar = req.body.newMovieStar
  let theDescription = req.body.newMovieDescription;
  let theImage = req.body.newMovieImage;

  
 Movie.create({
    title: theTitle,
    director: theDirector,
    star: theStar, 
    description: theDescription,
    image: theImage,
    donor: req.session.currentUser._id,
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

  Movie.findById(id).populate('star').populate('donor')
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

    if(req.session.currentUser._id != (theMovie.donor) && !req.session.currentUser.admin){
        res.redirect('/login')
        return
      }
      Celeb.find()
      .then((allCelebs)=>{

          allCelebs.forEach((thisCeleb)=>{
            if(thisCeleb._id.equals(theMovie.star)){
              thisCeleb.isTheCorrectCeleb = true;
            }
          })
          console.log(allCelebs, 98989898)

      res.render('movie-views/edit', {theActualMovie: theMovie, star: allCelebs})

         })
    .catch((err)=>{
        next(err);
    })
    })
.catch((err)=>{
    next(err);
  })
})

router.post('/movies/update/:id', (req, res, next)=>{
Movie.findById(req.params.id)
    .then((theMovie)=>{

    if(req.session.currentUser._id != (theMovie.donor) && !req.session.currentUser.admin){
        res.json({message: "Unauthorized Injection"})
        return
      }

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

