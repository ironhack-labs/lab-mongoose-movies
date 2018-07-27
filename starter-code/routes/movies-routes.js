
const express = require('express');
const movieRouter = express.Router();

// require model(s):
const Movie = require('../models/movie-model');

// display all the movies 
movieRouter.get('/movies', (req, res, next) => {
    Movie.find()
    .then( responseFromDB => {
        // console.log('Movies: ', responseFromDB);

        //                           variable to be      placeholder I 
        //                             used in view      use only inside this route
        //                                  |               |
        res.render('movies/movie-list', { movies: responseFromDB });
    })
    .catch( err => console.log('Error while getting the movies from DB: ', err));
});



// create new movie - display the form:
movieRouter.get('/movies/create', (req, res, next) => {
    res.render('movies/new-movies')
})

// to pick up data from the form: 
//   <form action="/movies/addMovie" method="post">
movieRouter.post('/movies/addMovie', (req, res, next) => {
    // console.log('BODY: ', req.body);
    const newMovie = {
    // left side are the              right side are the input names from the form
    // fields from our model               |
        title: req.body.newTitle, // < ----
        genre: req.body.newGenre,
        plot: req.body.newPlot
    }

    Movie.create(newMovie)
    .then(() => {
        // redirect is looking for URL to visit next
        //               |
        res.redirect('/movies')
    })
    .catch( err => console.log('Error while saving the new movie: ', err));
})

// edit the movie - get route to display the form:
movieRouter.get('/movies/edit/:movieId', (req, res, next) => {
    const id = req.params.movieId;
    // console.log('id is: ', id);
    Movie.findById(id)
    .then(oneMovie => {
        // console.log('is this one movie: ', oneMovie);
        res.render('movies/edit-movie', { movie: oneMovie } )
    })
    .catch( err => console.log('Error while updating movie: ', err));
})

// post route to pick up the changes and send it to DB
movieRouter.post('/movies/edit/:id', (req, res, next) => {
    const movieId = req.params.id;
    const editedMovie = {
        title: req.body.editedTitle,
        genre: req.body.editedGenre,
        plot: req.body.editedPlot
    }
    // console.log('edited: ', editedMovie);
    // .findByIdAndUpdate expects 2 arguments to be passed: 
    //                 id of the movie and  changes that we saved in variable editedMovie
    //                           ^           ^ 
    //                           |           |
    Movie.findByIdAndUpdate(movieId,editedMovie)
    .then( () => {
        res.redirect(`/movies/${movieId}`);
    } )
    .catch(  error => console.log('Error while saving the changes after editing: ', error));
} )


// delete
movieRouter.post('/movies/:movieId/delete', (req, res, next) => {
    const id = req.params.movieId;
    Movie.findByIdAndRemove(id)
    .then( () => {
        res.redirect('/movies');
    } )
    .catch( err => console.log('Error while deleting movie: ', err));
})







movieRouter.get('/movies/:theId', (req, res, next) => {
    const movieId = req.params.theId;
    console.log('id: ', movieId);
    Movie.findById(movieId)
    .then( oneMovieFromDB => {
        // console.log('what is this: ', oneMovieFromDB);
        //       movies is the    file that is 
        //      folder in views   inside the movies
        //             ^          folder 
        //             |            |
        res.render('movies/movie-details', { movie: oneMovieFromDB })
    } )
    .catch( error => {
        // { } => ES6: this is optional if we have only one operation and everything fits in one line
        console.log('Error while getting single movie from DB: ', error)
    });
})







module.exports = movieRouter;