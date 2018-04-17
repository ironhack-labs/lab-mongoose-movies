const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity-models")
const Movie = require("../models/movies-models")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// SHOW MY CELEBRITY
router.get("/celebrities", (req,res,next)=> {
  Celebrity.find()
  .then((celebrityFromDb)=> {
    // res.send(celebrityFromDb)
    // console.log(celebrityFromDb)
  res.locals.celebrityList = celebrityFromDb;
  res.render("celebrity/index")
  })
  .catch((err)=>{
        next(err)
  });
});
// Show my movies 
router.get("/movies", (req,res,next)=> {
Movie.find()
  .then((movieFromDb)=> {
    
  res.locals.movieList = movieFromDb;
  res.render("movie/index")
  })
  .catch((err)=>{
        next(err)
  });
});

//new celeb
router.get('/celebrities/new', (req ,res, next)=> {
  res.render('celebrity/new');
})

//celeb form create
router.post('/celeb-new', (req, res, next) =>{
  const {name, occupation, catchPhrase} = req.body;
 Celebrity.create({name, occupation, catchPhrase})
 .then(()=>{
   // redirect only to urls  
   res.redirect('/celebrities')
 })
 .catch((err)=>{
   next(err);
 })
  // res.send(req.body)
})

//new movies
router.get('/movies/new', (req ,res, next)=> {
  res.render('movie/new');
})

//movie form create
router.post('/movie-new', (req, res, next) =>{
  const {name, genre, plot} = req.body;
 Movie.create({name, genre, plot})
 .then(()=>{
   // redirect only to urls  
   res.redirect('/movies')
 })
 .catch((err)=>{
   next(err);
 })
  // res.send(req.body)
})


//UPDATE celeb 
router.get('/celebrities/:celebrityId/edit', (req ,res, next)=> {
    Celebrity.findById(req.params.celebrityId)
    .then((celebDetails)=>{
    res.locals.celebrityId = req.params.celebrityId;
    res.locals.celebrity = celebDetails;
    res.render('celebrity/edit');
  })
    .catch((err)=>{
  next(err)
    })
  })
  

  //update celeb step 5 
  router.post('/celeb-new/:celebrityId', (req,res,next)=>{
    // res.send(req.body);
    const {name, occupation, catchPhrase} = req.body;
   Celebrity.findByIdAndUpdate(
      req.params.celebrityId,  // which document to update
      {name, occupation, catchPhrase}, // what changes to make 
      { runValidators: true}   // extra settings
    )
    .then(()=>{
      res.redirect(`/celebrities/${req.params.celebrityId}`)
    })
    .catch((err)=>{
      next(err);
    })
  })
  


  //UPDATE movie 
router.get('/movies/:movieId/edit', (req ,res, next)=> {
  Movie.findById(req.params.movieId)
  .then((movieDetails)=>{
  res.locals.movieId = req.params.movieId;
  res.locals.movie = movieDetails;
  res.render('movie/edit');
})
  .catch((err)=>{
next(err)
  })
})


//update movie step 5 
router.post('/movie-new/:movieId', (req,res,next)=>{
  // res.send(req.body);
  const {name, genre, plot} = req.body;
 Movie.findByIdAndUpdate(
    req.params.movieId,  // which document to update
    {name, genre, plot}, // what changes to make 
    { runValidators: true}   // extra settings
  )
  .then(()=>{
    res.redirect(`/movies/${req.params.movieId}`)
  })
  .catch((err)=>{
    next(err);
  })
})







// BY detail for celeb
router.get('/celebrities/:celebrityId', (req,res,next)=>{
  Celebrity.findById(req.params.celebrityId)
  .then((celebDetails)=>{
    res.locals.celebrity = celebDetails;
    res.render("celebrity/show")
  })
  .catch((err)=>{
    next(err)
  });
});

// BY detail for movies
router.get('/movies/:movieId', (req,res,next)=>{
  Movie.findById(req.params.movieId)
  .then((movieDetails)=>{
    res.locals.movie = movieDetails;
    res.render("movie/show")
  })
  .catch((err)=>{
    next(err)
  });
});

// celeb delete
router.get('/celebrities/:celebrityId/delete', (req,res,next)=>{
  Celebrity.findByIdAndRemove(req.params.celebrityId)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err)
  })
})
// movie delete
router.get('/movies/:movieId/delete', (req,res,next)=>{
  Movie.findByIdAndRemove(req.params.movieId)
  .then(()=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err)
  })
})




module.exports = router;
