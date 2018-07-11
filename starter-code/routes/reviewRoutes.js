const express = require('express')
const reviewRouter = express.Router()
const Movie = require('../models/movie')

//first find the movie

reviewRouter.get('/movies/:id/reviews/new' , (req, res, next) =>{
  Movie.findById(req.params.id)
  .then((theMovie)=>{
    res.render('addReview', {theMovie})
    //path to the file that will run, not the url
  })
  .catch((err)=>{
  console.log('go to reviewRoutes and check the Movie.findById :)')
    next(err)
  })  
})

reviewRouter.post('/movies/:id/reviews/create', (req, res, next) =>{
  Movie.findByIdAndUpdate(req.params.id, {$push:{review:req.body}})
  .then((response) =>{
    res.redirect(`/movies/${req.params.id}`)
  })
  .catch((err)=>{
    next(err)
    console.log('go to reviewRoutes and check the reviewRouter.post :)')
  })
})

reviewRouter.post('/movies/:id/reviews/delete/:reviewIndex', (req, res, next)=>{
  const movieID = req.params.id;
  const reviewIndex = req.params.reviewIndex

  //why doesnt it work without the vairable?
  Movie.findById(movieID)
  .then((theMovieThatImEditing=>{
    console.log("theMovieThatImEditing: ",theMovieThatImEditing)
    theMovieThatImEditing.review.splice(reviewIndex, 1)
    theMovieThatImEditing.save() //what is the .save for?
    .then((x)=>{
    res.redirect('/movies/'+movieID)
    })
    .catch((err)=>{
      next(err)
    })
  }))
  .catch((err)=>{
    console.log('go to reviewRoutes and check the reviewRouter.post :)')
    next(err);
  })
})



module.exports = reviewRouter