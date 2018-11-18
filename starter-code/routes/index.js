const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities',  {celebrity})
  })
  .catch(error => console.log(error));
});


/* GET celebrities detail's page */
router.get('/celebrities/:id', (req, res, next) => {

  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
  .then(celebrity => {
    res.render('celebrities/show', {celebrity})
    })
  .catch(error => console.log(error)) 
});

/* GET new celebrities page */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});


router.post('/new', (req, res, next) => {
 
  const newCelebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })

  
  newCelebrity.save()
    .then((newCelebrity) => {
      res.redirect('celebrities');
  })
    .catch(error => res.redirect('new'));
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  let celebrityId = req.params.id;

  Celebrity.findByIdAndRemove({'_id': celebrityId})
  .then(Celebrity => {
    res.redirect('/celebrities');
    })
  .catch(error => console.log(error));
})

// router.get('/celebrities/:id/edit', (req, res, next) => {
//   let celebrityId = req.params.id;
//   Celebrity.findById({'_id':celebrityId})
//   .then(celebrity => {
//     res.render('/celebrities/edit');
//   })
//   .catch(error => console.log(error))


// })

// router.post('/celebrities/:id', (req, res, next) => {

// })




///////////////////////////////////////
///MOVIE'S ROUTE///////////////////////
///////////////////////////////////////

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movie => {
    res.render('movie/movieList', {movie})
  })
  .catch(error => console.log(error));
});

router.get('/movies/:id', (req, res, next) => {

  let movieId = req.params.id;
  Movie.findById({_id: movieId})
  .then(movie => {
    res.render('movie/showDetails', {movie})
  })
  .catch(error => console.log(error))
  
})

/* GET new movies page */
router.get('/newMovie', (req, res, next) => {
  res.render('movie/newMovie');
})

router.post('/newMovie', (req,res,next) =>{
  const newMovie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })

  newMovie.save()
    .then((newMovie) => {
      res.redirect('/movies');
    })
    .catch(error => res.redirect('/newMovie'))



})

