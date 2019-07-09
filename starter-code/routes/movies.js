const express = require('express');
const movieRouter  = express.Router();
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');


movieRouter.get('/movies', (req, res, next) => {
  if (req.session.currentUser){
    
    Movie.find().populate('celebrity')
    .then((theThingWeGetBackFromDB)=>{
      res.render('movies/index', {user: req.session.currentUser, allTheMovies: theThingWeGetBackFromDB})
    })
    .catch((err)=>{
      next(err);  
    })
  }  else {
    req.session.errorCount = 1
    req.session.errorMessage = "Sorry you must be logged in to use this page";
    res.redirect('/login');

  }
})


movieRouter.get('/movies/new', (req, res, next)=>{
  Celebrity.find()
  .then((allCelebritiesFromDB)=>{
    res.render('movies/new', {allCelebrities: allCelebritiesFromDB});
  })
  .catch((err)=>{
    next(err);
  })
});


movieRouter.post('/movies', (req, res, next)=>{
  const {theTitle, theGenre, thePlot, theCelebrity} = req.body;
  let newMovie = {title: theTitle, genre: theGenre, plot: thePlot, celebrity: theCelebrity}
  Movie.create(newMovie)
  .then (()=>{
    res.redirect('movies')
  })
  .catch ((err)=>{
    res.render('movies/new')
    next(err);
  })
});


movieRouter.get('/movies/:id', (req, res, next)=>{
  
  let theID = req.params.id;
  Movie.findById(theID)
  .then((oneSingleMovie)=>{
    res.render('movies/show', {theMovie: oneSingleMovie})
  })
  .catch((err)=>{
    next(err);
  })
});


movieRouter.post('/movies/:id/delete', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.id)
  .then (()=>{
    res.redirect('/movies')
  })
  .catch ((err)=>{
    next(err);
  })
});

// movieRouter.get('/movies/:id/edit', (req, res, next)=>{
  // let theID = req.params.id
  // Movie.findById(theID)
//   .then((movieFromDb)=>{
//     Celebrity.find()
//       .then((allCelebritiesFromDB)=>{
//         // if it's the one, then set it to be selected  ---->   selectedCelebrityID: movieFromDb.celebrity
//         console.log('selectedCelebrity:', movieFromDb.celebrity);
//       res.render('movies/edit', {movie: movieFromDb, allCelebrities: allCelebritiesFromDB, selectedCelebrity: movieFromDb.celebrity});
//     })
//   })
//   .catch((err)=>{
//     next(err);
//   });
// });

movieRouter.get('/movies/:id/edit', (req, res, next) => {
  let theID = req.params.id
  Movie.findById(theID)
  .then((movie)=>{
    Celebrity.find()
    .then((allCelebritiesFromDB)=>{
      let selectedName = "";
      allCelebritiesFromDB.forEach((ele)=>{
        const areEqual = movie.celebrity.equals(ele._id);
        if(areEqual){
          selectedName = ele.name;
        }
      });
      const allCelebritiesMinusSelected = allCelebritiesFromDB.filter((ele)=>{
      return !movie.celebrity.equals(ele._id);
      });
    res.render('movies/edit', {movie: movie, allCelebritiesMinusSelected: allCelebritiesMinusSelected, selectedName: selectedName});
    });
  })
  .catch((err)=>{
    console.log('error ' + err);
    next(err);
  });
});


movieRouter.post('/movies/:id', (req, res, next)=>{
  let theID = req.params.id
  Movie.findByIdAndUpdate(theID, req.body)
  .then(()=>{
    res.redirect('/movies/');
  })
  .catch((err)=>{
    next(err);
  })
});


module.exports = movieRouter;