const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies');

router.get('/movies', (req, res, next) => {
    Movies.find()
        .then((allMovies)=>{
            res.render('views-movies/movies', {allMovies});
    })
        .catch((err)=>{
            next(err);
    })
});

//not working - only will redirect to login page, but it does console user.id
// router.get('/movies', (req, res, next) => {
//     if(!req.user || !req.user.admin){
//         console.log("<><><><><><><><" + req.user)
//         req.flash('error', 'page not available');
//         res.redirect('/login')
//         return;
//     } else{
//         Movies.find()
//             .then((allMovies)=>{
//                 res.render('views-movies/movies', {allMovies});
//             })
//             .catch((err)=>{
//                 next(err);
//             })
//     }
// });

router.get('/movies/new', (req, res, next) => {
    if(!req.user) {
        req.flash('error', 'sorry you must be logged in to donate a book')
        res.redirect('/login');
    } else {
    Movies.find()
        .then((allTheMovies)=>{
            res.render('views-movies/new-movie', {allTheMovies})
        })
        .catch((err)=>{
            next(err);
        })
    }
});

router.post('/movies/create', (req, res, next)=>{
    const newMovie = req.body;
    newMovie.donor = req.user._id;

    Movies.create(newMovie)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch((err)=>{
        next(err)
    })
  })


  router.post('/movies/:theID/delete', (req, res, next)=>{
    Movies.findByIdAndRemove(req.params.theID)
      .then(()=>{
        res.redirect('/movies');
    })
      .catch((err)=>{
        console.log(err);
        next(err);
    })
  })


router.get('/movies/:theID/edit', (req, res, next)=>{
    Movies.findById(req.params.theID)
      .then((theMovie)=>{
        res.render('views-movies/edit', {theMovie})
    })
      .catch((err)=>{
        console.log(err);
        next(err);
    })
  })
  
  router.post('/movies/:theID/update', (req, res, next)=>{
    Movies.findByIdAndUpdate(req.params.theID, req.body)
      .then(()=>{
        res.redirect('/movies/'+req.params.theID);
    })
    .catch((err)=>{
        next(err)
    })
  })


router.get('/movies/:theID', (req, res, next)=>{
    Movies.findById(req.params.theID).populate("donor")
      .then((specificsFromDB)=>{
        res.render('views-movies/movies-det', {theSpecifics: specificsFromDB})
    })
      .catch((err)=>{
        next(err);
    })
  })

module.exports = router;
