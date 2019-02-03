const express = require('express');
const router = express.Router();
// require movie model
const Movie = require('../models/movie-model');
const Celebrity = require('../models/celebrity-model');


// .get() to display the form to create a new movie
// now it is router because it is in the router file, not app for "app.get"
// now the app.js file sends us to the movie-route file and we do not need to show localhost:3000/celebrity because---
// -- EDIT NOTES!! --
// only for router.get and router.post is when we go straight to the '/new' since it is being directed below to the form
router.get('/create', (req, res, next) => {
  // make sure to see all the folders that are inside the views
  Celebrity.find()
  .then( foundCelebritiesFromDB => {
    res.render('movie-views/new-movie', {foundCelebritiesFromDB})
  })
  .catch(err => {
    console.log("Error while finding celebrities: ", err)
  })
})

// .post() to send the data user put in the form to the database
// from new-movie.hbs {/* <form action="/movie/create" method="post"> */}
router.post('/create', (req, res, next) => {
  // console.log("Data the user put in the form: ", req.body); // <= works fine! now we "create"

  Movie.create(req.body)
  .then(newMovie => {
    // console.log("New movie created: ", newMovie); // <= worked fine

    // take us to the page that already exists in our application
    // this is the URL so it HAS to start with '/'
    res.redirect('/movie/allmovies');
  })
  .catch(err => {
    console.log("Error while creating a new movie: ", err)
  })
})


// router.get() gets all the movies from the database 

router.get('/allmovies', (req, res, next) => {
// and movie.find will find the movies looked for and goes to ".then"
  Movie.find()
  // allMovies can be any name
  .then(allMovies => {
    res.render('movie-views/all-movies', { movie: allMovies })
  })
  .catch(err => {
    console.log("Error while getting the movies: ", err)
  })
})




// DELETE route:
{/* <form action="movies/{{theMovie.id}}/delete" method="POST"> */}
router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(() => {
    // console.log("Deleted movie is: ", theMovie)
    res.redirect('/allmovies');
  })
  .catch(err => console.log("Error while deleting the movie: ", err))
})




// // EDIT the movie -get route to display the form
// // <a href="/movies/{{this.id}}/edit">Edit theMovie</a>
// router.get('/:id/edit', (req, res, next) => {
//   Movie.findById(req.params.id)
//   .then(foundMovie => {
//     Celebrity.find()
//     .then(allCelebs => {
//       allCelebs.forEach(oneCeleb => {
//         foundMovie.cast.forEach(oneCastMember => {
//           // console.log("what is this: ", oneCastMember);
//           if (oneCeleb._id.equals(oneCastMember)) {
//             oneCeleb.isInCast = true;
//           }
//         })
//       })
//       res.render('movie/edit-movie', {movie: foundMovie, allCelebs})
//     })
//   })
//   .catch(err => {
//     console.log("Error while getting the movie for editing: ", err)
//   })
// })

// // post route to save the updates in the movie

// router.post('/:movieId/update', (req, res, next) => {
//   // we can use 'req.body' since we use the same name as in our Movie model
//   Movie.findByIdAndUpdate(req.params.movieId, req.body)
//   .then(updatedMovie => {
//     // if everything is fine take me back to the details page so we can see the changes made
//     res.redirect(`/movie/${req.params.movieId}`);
//   })
//   .catch(err => {
//     console.log("Error while updating the movie: ", err)
//   })


// })




// details page:

router.get('/:movieId', (req, res, next) => {
  // cast is the array of IDs and we need full object so we need to use
  // .populate('cast') and pass the "cast" in the method because we are populating that specific field
  Movie.findById(req.params.movieId).populate('cast')
  .then( theMovie => {
    // console.log("The requested book is: ", theMovie);
    res.render('movie-views/movie-details', {theMovie})
  })
  .catch(err => {
    console.log("Error while getting the details of movie: ", err)
  })
})


module.exports = router;