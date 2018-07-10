const express = require('express');
const reviewRouter = express.Router();
const Movie = require('../models/moviemodelfile')



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