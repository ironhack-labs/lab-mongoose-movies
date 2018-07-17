const express = require('express');
const reviewRouter = express.Router();
const Movie  = require('../models/movie');

reviewRouter.get('/movies/:id/reviews/new', (req, res, next)=>{
    Movie.findById(req.params.id)
    .then((theMovie)=>{
        res.render('addReview', {theMovie})
    })
    .catch((err)=>{
        next(err)
    })
});

reviewRouter.post('/movies/:id/reviews/create', (req, res, next)=>{
    // const theReview = {reviewer: req.body.reviewer, content: req.body.content}
    const theReview = req.body;
 
    Movie.findByIdAndUpdate(req.params.id, {$push: {reviews: theReview}     }) 
    .then((response)=>{
        res.redirect(`/movies/${req.params.id}`)
    })
    .catch((err)=>{
        next(err);
    })
});

reviewRouter.post('/movies/:id/reviews/delete/:reviewIndex', (req, res, next)=>{
    const reviewIndex = req.params.reviewIndex;
    Movie.findById(req.params.id) 
    .then((theMovieThatIEdit)=>{
        theMovieThatIEdit.reviews.splice(reviewIndex, 1)

        theMovieThatIEdit.save()
        .then(()=>{
            res.redirect(`/movies/${req.params.id}`)
        })
        .catch((err)=>{
            next(err);
        })
    })
    .catch((err)=>{
        next(err);
    })
});

reviewRouter.get('/movies/:id/reviews/edit/:reviewIndex', (req, res, next)=>{
    const reviewIndex = req.params.reviewIndex;
    Movie.findById(req.params.id)
    .then((theMovieThatIEdit)=>{
        theMovieThatIEdit.reviews[reviewIndex] = {reviewer: reviewer, content: content}
    })
    .catch((err)=>{
        next(err);
    })
})

reviewRouter.post('/movies/:id/update/edit/:reviewIndex', (req, res, next)=>{
    Movie.findByIdAndUpdate()
})


module.exports = reviewRouter;