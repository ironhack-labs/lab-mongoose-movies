const express = require('express');
const router  = express.Router();
const Celeb    = require('../models/Celebrity.js');
const Movie = require('../models/Movie.js');

router.get('/', (req, res, next) => {
  res.render('index');
});

// route LIST of celebrities
router.get('/celebrities', (req, res, next) =>{
  Celeb.find()
  .then((allTheCelebs) =>{
    res.render('celebrities/celebrities', {celebs: allTheCelebs})
  })
  .catch((err) =>{
    next(err);
  })
});


// route DETAILS for celebrity
router.get('/celeb/:id', (req, res, next)=>{
  Celeb.findById(req.params.id)
  .then((theCeleb)=>{
    res.render('celebrities/detailsC', theCeleb)
  })
  .catch((err)=>{
    next(err);
  })
});



// routes to ADD celebrity
router.get('/celebrities/addC', (req, res, next) =>{
    res.render('celebrities/addC')
  })
 
router.post('/celebrities/addC', (req, res, next)=>{
  const {name, occupation, catchPhrase, image } = req.body;
  const newCeleb = new Celeb({name, occupation, catchPhrase, image})
  newCeleb.save()
  .then ((celeb)=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    console.log(error);
  })
})


// routes to EDIT celebrity 
router.get('/:id/edit', (req, res, next)=>{
  Celeb.findById(req.params.id)
  .then((theCeleb)=>{
        res.render('celebrities/editC', {theCeleb: theCeleb})
  })
  .catch((err)=>{
    next(err);
  })
});

router.post('/:id/editC', (req, res, next)=>{
  Celeb.findByIdAndUpdate(req.params.id, req.body)
  .then (()=>{
  res.redirect('/celebrities' );
})
.catch((err)=>{
  next(err)
});
});


// route to DELETE Celebrity
router.post('/:id/delete', (req, res, next)=>{
  Celeb.findByIdAndRemove(req.params.id, req.body)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err);
  })
});


// -----------------------------------------------MOVIE ROUTES----------------------------------------
// route to LIST all movies
router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then((allTheMovies)=>{
    res.render('movies/movies', {movies: allTheMovies})
  })
  .catch((err)=>{
    next(err);
  })
});

// This route for movie DETAILS
router.get('/movie/:id', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((theMovie)=>{
    res.render('movies/detailsM', theMovie)
  })
  .catch((err)=>{
    next(err);
  })
});

// Routes to ADD a movie
router.get('/movies/addM', (req, res, next)=>{
  res.render('movies/addM')
})

router.post('/movies/addM', (req, res, next)=>{
const {title, genre, plot } = req.body;
const newMovie = new Movie({title, genre, plot})
newMovie.save()
.then ((movie)=>{
  res.redirect('/movies');
})
.catch((err)=>{
  console.log(error);
})
})
 


// Routes to EDIT Movies
router.get('/:id/editM', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((theMovie)=>{
    res.render('movies/editM', {theMovie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })
});

router.post('/:id/editM', (req, res, next)=>{
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.redirect('/movies');
  })
  .catch((err)=>{
    next(err);
  })
});
  

// Route to DELETE movie
router.post('/:id/deleteM', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.id, req.body)
  .then(()=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err);
  })
});

module.exports = router;