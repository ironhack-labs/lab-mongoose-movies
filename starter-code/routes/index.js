const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res)=>{
  Celebrity.find()
    .then(celebrities =>{
      console.log(celebrities)
      res.render('celebrities', {celebrities})
    })
    .catch(err =>{
      console.log(err)
    })
})

router.get('/celebrities/new',(req, res)=>{
  res.render('nuevo')
})

router.post('/celebrities/new', (req, res)=>{
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrities = new Celebrity({name, occupation, catchPhrase} )
  newCelebrities.save()
  .then(()=>{
    res.redirect(301, '/celebrities')
  })
  .catch(err=>console.log(err))
})

router.post('/celebrities/:id/delete', (req, res)=>{
  let celebritiesId = req.params.id
  Celebrity.findByIdAndRemove({'_id': celebritiesId})
  .then(()=>{
    res.redirect(301, '/celebrities')
  })
  .catch(err=>{console.log(err)})
})

router.get('/celebrities/edit/', (req, res)=>{
  Celebrity.findOne({'_id': req.query.celebrity_id})
  .then((celebrities)=>{
    res.render('edit', {celebrities})
  })
  .catch((err)=>{
    console.log(err)
  })
})


router.get('/celebrities/:id',(req,res)=>{
  let celebritiesId = req.params.id
  Celebrity.findOne({'_id':celebritiesId})
  .then((celebrities)=>{
    res.render('show', {celebrities})
  })
  .catch((err)=>{
    console.log(err)
  })
})

//+++++++++++++++++++++++Movies//////////////

router.get('/movies', (req, res)=>{
  Movie.find()
    .then(movies =>{
      console.log(movies)
      res.render('movies', {movies})
    })
    .catch(err =>{
      console.log(err)
    })
})

router.get('/movies/new',(req, res)=>{
  res.render('nuevo-movies')
})

router.post('/movies/new', (req, res)=>{
  const {title, genre, plot} = req.body;
  const newMovies = new Movie({title, genre, plot})
  newMovies.save()
  .then(()=>{
    res.redirect(301, '/movies')
  })
  .catch(err=>console.log(err))
})

router.post('/movies/:id/delete', (req, res)=>{
  let moviesId = req.params.id
  Movie.findByIdAndRemove({'_id': moviesId})
  .then(()=>{
    res.redirect(301, '/movies')
  })
  .catch(err=>{console.log(err)})
})

router.get('/movies/edit/', (req, res)=>{
  Movie.findOne({'_id': req.query.movies_id})
  .then((movies)=>{
    res.render('edit-movies', {movies})
  })
  .catch((err)=>{
    console.log(err)
  })
})



router.get('/movies/:id',(req,res)=>{
  let moviesId = req.params.id
  Movie.findOne({'_id':moviesId})
  .then((movies)=>{
    res.render('show-movies', {movies})
  })
  .catch((err)=>{
    console.log(err)
  })
})

module.exports = router;
