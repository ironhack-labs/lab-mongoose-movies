const express = require('express'); //express -- we use express to use the router
const router = express.Router();    //It knows what .get and .post is
const Movie = require('../models/movie') //require model



//.find to get the movies from the db
//placeholder would be the response from database (return value).
//listOfMovies is the name of the array of movies in the db
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((listOfMovies)=>{
      res.render('movieList', {listOfMovies});
  })
  .catch((err)=>{
      next(err); 
   })
});

//after doing this, make sure to connect it to the route. Go to app.js - to almost the end
//line 60-65

//post, delete and get
//get: displays something to the user. User getting some information
// post: sends information to the db or process something 


//user will see the form
router.get('/movies/new', (req, res, next) =>{
  res.render('newMovie');
});









//sends information that the user typed in and sent it to the database
//handles things out of sight
// req.body.title -- title is the name of the input where the user typed in the /movies.new
//page (<input type="text" name="title" id="title-input">)
router.post('/movies/create', (req, res, next)=>{
  const newMovie = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
  })
  //    |
  // these are the fields in the 
  Movie.create(newMovie)
  .then(() => {
      res.redirect('/movies')
  })
  .catch((err)=>{
    //       next(err);
    //   })

  //these are extra steps if I dont do .create
//   newMovie.save()
//   .then((response)=>{
//       res.redirect('/movies')
//   })
//   .catch((err)=>{
//       next(err);
//   }) 
})
})


//req request: getting something from user
//res response :display information

//get route to display the form
router.get('/movies/:id/edit', (req, res, next)=>{
    Movie.findById(req.params.id)
    .then((theMovie)=>{
        res.render('editMovie', {theMovie: theMovie})
        //                      var blah = theMovie -> blah is available in the editMovie.hbs file
    })
    .catch((err)=>{
        next(err);
    })
})


router.post('/movies/:id/update', (req, res, next)=>{
    Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.editedTitle,
        genre: req.body.editedGenre,
        plot: req.body.editedPlot,
    })
    .then((theMovie)=>{
        res.redirect('/movies/' + theMovie._id)
    })
    .catch((err)=>{
        next(err);
    })  
})

router.post('/movies/:id/delete', (req, res, next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then((reponse)=>{
        res.redirect('/movies');
    })
    .catch((err)=>{
        next(err);
    })
})




//route for the details of an specific 
//if is not redirect dont put the '/' in front of the file/folder name 
//redirect looking for url so put '/'

router.get('/movies/:id', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
  .then((theMovie)=>{    
    res.render('movieDetails',  {theMovie});
})
.catch((err)=>{
   next(err); 
})
});


//exporting the routes to make them available to other files :) //this is always the last line!!!!
module.exports = router;  