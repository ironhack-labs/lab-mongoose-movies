const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

//================== Home Page =================
router.get('/', (req, res, next) => {
  res.render('index');
});
//==============================================


//================= Celebrities ================
//= = = = = = = = = = = = = = = = = = = = = = = 

// Celeb Home
router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then(celebritiesFromDb => {
    // res.json(celebritiesFromDb)
    res.render('celebrities', { celebritiesFromDb} );
  })
  .catch((error) => {
    console.log(error);
  })
});

// Celeb Details
router.get('/details/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((details) => {
    // res.json(details)
    res.render("details", {details});
  })
  
  .catch((error) => {
    console.log(error);
  })
});

// Add New 
router.get('/addNew', (req, res, next) => {
  res.render("addNew");
});

router.post('/addNew', (req,res,next) => {
  let newCeleb = new Celebrity(req.body);
  newCeleb.save()
  .then((celebrities) => {
    })
    .catch((error) => {
    
    })
  res.redirect('/celebrities');
})

// Edit Details
router.get('/edit/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(celeb => {
    res.render("edit", {celeb});

  })
});

router.post('/edit/:id', (req,res,next) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.redirect(`/details/${req.params.id}`)
  })
})

// Delete 
router.post('/details/:id', (req,res,next) => {
  Celebrity.findByIdAndDelete(req.params.id)
  .then( ()=> {
    res.redirect('/celebrities')
  });
})
//= = = = = = = = = = = = = = = = = = = = = = =
//=============== End Celebrities ==============


//================= Movies =======================
//= = = = = = = = = = = = = = = = = = = = = = = =

// Movie Home
router.get('/movies', (req, res, next) => {
  Movie.find().then(moviesFromDb => {
    // res.json(celebritiesFromDb)
    res.render('movies', { moviesFromDb} );
  })
  .catch((error) => {
    console.log(error);
  })
});

// Movie Details
router.get('/movieDetails/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movieDetails) => {
    // res.json(details)
    res.render("movieDetails", {movieDetails});
  })
  
  .catch((error) => {
    console.log(error);
  })
});

// Add New 
router.get('/addNewMovie', (req, res, next) => {
  res.render("addNewMovie");
});

router.post('/addNewMovie', (req,res,next) => {
  let newMovie = new Movie(req.body);
  newMovie.save()
  .then((movies) => {

  })
  .catch((error) => {
    
  })
  res.redirect('/movies');
})

// Edit Details
router.get('/editMovie/:id', (req, res, next) => {
  Movie.findById(req.params.id).then(movies => {
    res.render("editMovie", {movies});

  })
});

router.post('/editMovie/:id', (req,res,next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.redirect(`/movieDetails/${req.params.id}`)
  })
})

// Delete 
router.post('/movieDetails/:id', (req,res,next) => {
  Movie.findByIdAndDelete(req.params.id)
  .then( ()=> {
    res.redirect('/movies')
  });
})
//= = = = = = = = = = = = = = = = = = = = = = = = = =
//================ End Movies ========================

module.exports = router;
