const express = require('express');
const router = express.Router();

const Celeb = require('../models/Celebrity')
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  Celeb.find()
    .then((allTheCelebrities) => {
      res.render('celebrities/index', {
        celebrities: allTheCelebrities
      })
    })
    .catch((err) => {
      next(err)
    })
});



// links celeb-routes to the movie new book hbs
router.get('/new', (req, res, next) => {
  // we need a list of all the movies on this page so we do
  Movie.find()
    .then((moviesList) => {
      console.log('=-=-=-=-=---=-=-=-=-=-', moviesList)

      res.render('celebrities/new', {
        movies: moviesList
      });
    })
    .catch((err) => {
      next(err)
    })
})



router.get('/show/:id', (req, res, next) => {
  let id = req.params.id;

  Celeb.findById(id).populate('movie')
    .then((celebObject) => {
      res.render('celebrities/show', {
        celeb: celebObject
      });
    })
    .catch((err) => {
      next(err);
    })
})



router.post('/', (req, res, next) => {

  let name = req.body.theName;
  let occupation = req.body.theOccupation;
  let catchPhrase = req.body.theCatchPhrase;
  let movie = req.body.theMovie;
  let image = req.body.theImage;


  // console.log(movie)

  Celeb.create({
      name: name,
      occupation: occupation,
      catchPhrase: catchPhrase,
      movie: movie,
      image: image
    })
    .then((result) => {
      console.log(result)

      res.redirect('/celebrity')
    })
    .catch((err) => {
      next(err);
    })
})

router.post('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  Celeb.findByIdAndRemove(id)
    .then((result) => {
      res.redirect('/celebrity')
    })
    .catch((err) => {
      next(err);
    })
})

router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id;

  Celeb.findById(id)
    .then((theCeleb) => {
      Movie.find()
        .then((theMovies) => {
          res.render('celebrities/edit', {
            celeb: theCeleb,
            movies: theMovies
          })
        })
        .catch((err) => {
          next(err);
        })
    })
    .catch((err) => {
      next(err);
    })
})

router.post('/update/:id', (req, res, next) => {

  let id = req.params.id
  let name = req.body.theName;
  let occupation = req.body.theOccupation;
  let catchPhrase = req.body.theCatchPhrase;
  let movie = req.body.theMovie;

  Celeb.findByIdAndUpdate(id, {
      name: name,
      occupation: occupation,
      catchPhrase: catchPhrase,
      movie: movie,
      image: image
    })
    .then((result) => {
      res.redirect('/celebrity')
    })
    .catch((err) => {
      next(err);
    })
})

module.exports = router;