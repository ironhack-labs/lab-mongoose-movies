const express = require('express');
const reviewRouter = express.Router();
const Movie = require('../models/moviemodelfile')


reviewRouter.get('/movies/:id/reviews/edit/:reviewIndex', (req, res, next)=>{
  const movieID = req.params.id;
  const reviewIndex = req.params.reviewIndex;
  console.log('*******************************************',movieID);
  Movie.findById(movieID)
  .then((theMovieThatImEditing)=>{
    // res.render('editReview', theMovieThatImEditing.reviews[reviewIndex]);
    const reviewSpot = theMovieThatImEditing.reviews[reviewIndex];
    
    res.render('editReview', reviewSpot);
  })
 .catch((err)=>{
   console.log("It didn't work", err)
 })
})

// Movie.findById(req.params.id)
// .then((theMovie)=>{
//   res.render('movies/edit', {theMovie})
// })
// .catch((err)=>{
//   next(err);
// })
// })
action="/movies/5b44efade4834314a78f6a9e/reviews/update/:reviewIndex"
reviewRouter.post('/movies/:id/reviews/update/:reviewIndex', (req, res, next)=>{
  const movieID = req.params.id;
  const reviewIndex = req.params.reviewIndex;

  console.log('movieID:'+movieID+'reviewIndex:'+reviewIndex);

  Movie.findById(movieID)
  .then((theMovieThatImEditing)=>{
  console.log('=========================================',movieID, theMovieThatImEditing);
  //   theMovieThatImEditing.reviews.splice(reviewIndex, 1, {reviews: req.body});
  })
  .catch((err)=>{
    next(err)
  })
});

reviewRouter.post('/movies/:id/reviews/delete/:reviewIndex', (req, res, next)=>{
  const movieID = req.params.id;
  const reviewIndex= req.params.reviewIndex;

  Movie.findById(movieID)
  .then((theMovieThatImEditing)=>{
    theMovieThatImEditing.reviews.splice(reviewIndex, 1);

    theMovieThatImEditing.save()
    .then(()=>{
      res.redirect('/movies/'+movieID)
    })
    .catch((err)=>{
      next(err)
    })

  })
  .catch((err)=>{
    next(err);
  })
});


reviewRouter.get('/movies/:id/reviews/new', (req, res, next)=>{
  console.log('----------', req.params) //Keeping this to help me see it works :)
  Movie.findById(req.params.id)
  .then((theMovie)=>{
    res.render('addReview', {movie: theMovie})
  })
  .catch((err)=>{
    console.log('didnt work',err);
  })

});


///movies/{{movie._id}}/reviews/create
reviewRouter.post('/movies/:id/reviews/create', (req, res, next)=>{
  const theReview = req.body
  Movie.findByIdAndUpdate(req.params.id,{$push: {reviews: req.body}})
  .then((response)=>{
    res.redirect(`/movies/${req.params.id}`)
  })
  .catch((err)=>{
    next(err);
    console.log('didnt work', err);
  })
})





module.exports = reviewRouter;