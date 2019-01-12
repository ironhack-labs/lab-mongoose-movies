const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/celebrity')
const Movies = require('../models/movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res) => {
  Celebrities.find()
  .then (celebrities => {
    res.render('celebrities', {celebrities})  
  })
  .catch((err) => {console.log(err)})
})

router.get('/celebrities/add', (req, res) => {
  res.render('new');
})

router.post('/celebrities/add', (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrities ({name, occupation, catchPhrase})
  newCelebrity.save()
  .then ((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch ((error) => {
    console.log (err)
    res.redirect('/celebrities/add')
  })
})

router.get('/celebrities/edit', (req, res) => {
  Celebrities.findOne ({_id: req.query.celebrity_id})
  .then((celebrity) => {
    res.render('edita-celebrity', {celebrity})
  })
  .catch(err => {console.log(err)})
})

router.post('/celebrities/edit', (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrities.updateOne({_id: req.query.celebrity_id}, {$set: {name, occupation, catchPhrase}})
  .then (celebrity => {
    res.redirect('/celebrities')
  })
  .catch(err => console.log(err))
})


router.post('/celebrities/:id/delete', (req, res) => {
  let celebrityId = req.params.id;
  Celebrities.deleteOne({'_id': celebrityId})
  .then ((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch ((error) => console.log(err))
})

router.get('/celebrities/:id', (req, res) => {
  let celebrityId = req.params.id;
  Celebrities.findOne({'_id': celebrityId})
  .then (celebrity => {
    res.render('celebrity-detalle', {celebrity})  
  })
  .catch((err) => {console.log(err)})
})


router.get('/movies', (req, res) => {
  Movies.find()
  .then (movies => {
    res.render('movies', {movies})  
  })
  .catch((err) => {console.log(err)})
}) 

router.get('/movies/add', (req, res) => {
  res.render('newMovies');
})

router.post('/movies/add', (req, res) => {
  const {title, genre, plot} = req.body;
  const newMovie = new Movies ({title, genre, plot})
  newMovie.save()
  .then ((movie) => {
    res.redirect('/movies')
  })
  .catch ((error) => {
    console.log (err)
    res.redirect('/movies/add')
  })
})

router.post('/movies/:id/delete', (req, res) => {
  let movieId = req.params.id;
  Movies.deleteOne({'_id': movieId})
  .then ((movie) => {
    res.redirect('/movies')
  })
  .catch ((error) => console.log(err))
})

router.get('/movies/edit', (req, res) => {
  Movies.findOne ({_id: req.query.movie_id})
  .then((movie) => {
    res.render('edita-movie', {movie})
  })
  .catch(err => {console.log(err)})
})

router.post('/movies/edit', (req, res) => {
  const {title, genre, plot} = req.body;
  Movies.updateOne({_id: req.query.movie_id}, {$set: {title, genre, plot}})
  .then (movie => {
    res.redirect('/movies')
  })
  .catch(err => console.log(err))
})


router.get('/movies/:id', (req,res) => {
  let moviesId = req.params.id;
  Movies.findOne({'_id': moviesId})
  .then (movie => {
    res.render('movie-detalle', {movie})
  })
  .catch ((error) => {console.log (err)})
})




module.exports = router;
