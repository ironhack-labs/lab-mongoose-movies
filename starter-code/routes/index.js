const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity-model");
const Movie = require("../models/movies-model");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
/**************************CELEBRITIES*********************** */
router.get('/celebrities', (req, res, next)=>{
  Celebrity.find()
  .then((allTheCelebs)=>{
      res.locals.theirList = allTheCelebs;
      res.render('celebrities/c-index');
  })
  .catch((err)=>{
      next(err);
  })
});

router.get('/celebrity/:celebId', (req, res, next)=>{
  Celebrity.findById(req.params.celebId)
  .then((celebDetails)=>{
    res.locals.details = celebDetails;
    res.render('celebrities/show');
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/new', (req, res, next)=>{
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next)=>{
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(()=>{
    res.redirect("celebrities");
  })
  .catch((err)=>{
    res.render('celebrities/new');
  })
});

router.get('/delete/celebrity/:celebId', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.celebId)
  .then(()=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/edit/celebrity/:celebId', (req, res, next)=>{
  Celebrity.findById(req.params.celebId)
  .then((celebDetails)=>{
    res.locals.celebId = req.params.celebId;
    res.locals.thisCeleb = celebDetails;
    res.render("celebrities/updating")
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/edit-process/celebrity/:celebId', (req, res, next)=>{
  const { name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(
    req.params.celebId,
    { name, occupation, catchPhrase },
    { runValidators: true }
  )
  .then(()=>{
    res.redirect(`/celebrity/${req.params.celebId}`);
  })
  .catch((err)=>{
    next(err);
  })
});
 
/*************************MOVIES************************/
router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then((movieList)=>{
      res.locals.theirList = movieList;
      res.render('movies/all-movies');
    // res.send(movieList);
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/movie/:movieId', (req, res, next)=>{
  Movie.findById(req.params.movieId)
  .then((movieDetails)=>{
    res.locals.oneMovie = movieDetails;
    res.render("movies/one-movie");
  })
  .catch((err)=>{
    next(err)
  })
});

router.get('/add-new', (req, res, next)=>{
  res.render('movies/new-movie');
});

router.post('/post-new-movie',(req, res, next)=>{
 const { title, genre, plot } = req.body;
 Movie.create({title, genre, plot})
 .then(()=>{
   res.redirect('movies');
 })
 .catch((err)=>{
   res.render('movies/new-movie');
 });
});

router.get('/edit/movie/:movieId', (req, res, next)=>{
 Movie.findById(req.params.movieId)
 .then((editMovie)=>{
   res.locals.movieId = req.params.movieId;
   res.locals.oneMovie = editMovie;
   res.render('movies/edit-movie');
 })
 .catch((err)=>{
   next(err);
 }) 
});


router.post('/edit-process/movie/:movieId', (req, res, next)=>{
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(
    req.params.movieId,
    { title, genre, plot},
    {runValidators: true}
  )
  .then(()=>{
    res.redirect(`/movie/${req.params.movieId}`);
  })
  .catch(()=>{
    res.render('movies/edit-movie');
  })
});

router.get('/delete/movie/:movieId', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.movieId)
  .then(()=>{
    res.redirect("/movies");
  })
  .catch((err)=>{
    next(err);
  })
})

module.exports = router;
