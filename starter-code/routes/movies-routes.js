const express = require('express'); //
const movieRouter  = express.Router();  //

//requrie models(s):
const Movie = require('../models/movie-model');  //

movieRouter.get('/movies', (req, res, next)=>{  //
    Movie.find() //
    .then(responseFromDB => {
        console.log('Movies: ', responseFromDB);

                                    //variable to be     placeholder
                                    //  used in view    that represents database response
                                    //      |             |
        res.render('movies/movie-list', {movies: responseFromDB});

    })
    .catch( err => console.log('Error while getting the movies from DB: ', err));
});

//the error if you forget this line is particular


//get route is the route that we use to make 
//a request for information to the server
//displays something to the user.
//post route sends information 
movieRouter.get('/movies/create', (req, res, next)=>{
res.render('movies/new-movie')
})
movieRouter.post('/movies/addMovie', (req, res, next)=>{
    const newMovie ={
        //left side are the fields from our model, right side are the fields from our form...
        title: req.body.newTitle,
        genre: req.body.newGenre,
        plot: req.body.newPlot,
    }
    Movie.create(newMovie)
        .then(()=>{
            res.redirect('/movies')
        })
        .catch(err => console.log('Error while saving the new movie: ', err));
});
//update the movie - get route to display the form
movieRouter.get('/movies/edit/:movieId', (req, res, next)=> {
    const id = req.params.movieId;
    // console.log('id is', id);
    Movie.findById(id)
    .then(oneMovie => {
        // console.log('is this oneMovie', oneMovie);
        res.render('movies/edit-movie', {movie: oneMovie});
    })
    .catch( err => console.log('Error while updating movie:', err));
})

// delete
movieRouter.post('/movies/:movieId/delete', (req, res, next)=>{
    const id = req.params.movieId;
    Movie.findByIdAndRemove(id)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch( err => console.log('error while deleting movie,', err));
})
movieRouter.post('/movies/edit/:id', (req, res, next) =>{
    const movieId = req.params.id;
    const editedMovie = {
        title: req.body.editedTitle,
        genre:req.body.editedGenre,
        plot:req.body.editedPlot,
    }
    Movie.findByIdAndUpdate(movieId, editedMovie)
.then(()=> {
    res.redirect(`/movies/${movieId}`);
})
.catch( error => console.log('Error while saving the changes after editing:', error));
})
movieRouter.get('/movies/create', (req, res, next)=>{
    res.render('movies/new-movie')
    })
movieRouter.get('/movies/:theId/reviews/new', (req, res, next)=>{
    const movieId = req.params.theId;
    Movie.findById(movieId)
    .then(theMovie=>{
    res.render('/movies/addReview', {movie: theMovie})
})
.catch(error => console.log('error while getting single movie', error));
});

movieRouter.post('/movies/:theId/reviews/create', (req, res, next)=>{
    Movie.findByIdAndUpdate(req.params.theId, {$push: {reviews:req.body}})
    .then(response=>{
        res.redirect(`/movies/${req.params.theId}`)
    })
    .catch(err=>console.log('Error in create review', err));
});


movieRouter.get('/movies/:theId', (req, res, next)=>{
    const movieId= req.params.theId;
    Movie.findById(movieId)
    .then(oneMovieFromDB=>{
        res.render('movies/movie-details', {movie: oneMovieFromDB})

        //movies is the folder in views file that is inside the movies
        //folder
    })
    .catch(error => console.log('Error while getting single movie from Database', error));
});

module.exports = movieRouter;