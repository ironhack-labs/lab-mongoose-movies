const express       = require('express');
const reviewRouter  = express.Router();
const Movie        = require('../models/movie-model');


reviewRouter.get('/movies/:id/reviews/new', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((theMovie) => {
        res.render('movies/addReview', {movie: theMovie})
    })
    .catch((daError) => {
        next(daError)
    })
});

reviewRouter.post('/movies/:id/reviews/create', (req, res, next) => {

                                            
    Movie.findByIdAndUpdate(req.params.id, {$push: {reviews:req.body}})
    .then((response) => {
        res.redirect(`/movies/${req.params.id}`)
    })
    .catch((err) => {
        next(err)
    })

});

reviewRouter.post('/movies/:id/reviews/delete/:reviewIndex', (req, res, next) => {
    const movieId = req.params.id;
    const reviewIndex = req.params.reviewIndex;
    Movie.findById(movieId)
    .then((theMovieThatImEditing) => {
        theMovieThatImEditing.reviews.splice(reviewIndex, 1)

        theMovieThatImEditing.save()
        .then((x)=>{
            res.redirect('/movies/' + movieId)
        })
        .catch((err) => {
            next(err)
        })
    })
    .catch((err) => {
        next(err);
    })
    


});




module.exports = reviewRouter;