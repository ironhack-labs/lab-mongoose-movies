const express      = require('express');
const reviewRouter = express.Router();
const Movie        = require('../models/movie');

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
    Movie.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}})
    .then((response)=>{
        res.redirect(`/movies/${req.params.id}`)
    })
    .catch((err)=>{
        next(err);
    })
})

reviewRouter.post('/movies/:id/reviews/delete/:reviewIndex', (req,res, next)=>{
    const reviewIndex = req.params.reviewIndex
    Movie.findById(req.params.id)
    .then((theMovieThatIEdit)=>{
        theMovieThatIEdit.reviews.splice(reviewIndex, 1)

        theMovieThatIEdit.save()

    .then(()=>{
        res.redirect(`/movies/${req.params.id}`);
        })
    .catch((err)=>{
        next(err);
    })
    })
    .catch((err)=>{
        next(err);
    })
})

reviewRouter.get('/movies/:id/reviews/edit/:reviewIndex', (req,res,next)=>{
    const reviewIndex = req.params.reviewIndex;
    Movie.findById(req.params.id)
    .then((theMovieThatIEdit)=>{
        theMovieThatIEdit.reviews[reviewIndex] = {reviewer: req.body.reviewer, content: req.body.content}
    })
    .catch((err)=>{
        next(err);
    })
})

reviewRouter.post('/movies/:id/reviews/update/:reviewIndex', (req,res,next)=>{
    Movie.findByIdAndUpdate(req.params.id, theMovieThatIEdit.reviews[reviewIndex])

.then((theMovie)=>{
    res.redirect(`/books/${req.params.id}`)
})

.catch((err)=>{
    next(err);
})
})






   





module.exports = reviewRouter;