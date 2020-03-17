const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/CelebModel');
const Movie = require('../models/MovieModel')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//  LIST OF CELEBRITIES


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()

    .then(celebsFromDB => {
     // console.log('Retrieved celebs from DB:', celebsFromDB);
      res.render('celebrities', { celebrities: celebsFromDB });
    })
  .catch(error => {
    console.log('Error while getting the celebrities from the DB: ', error);
  });

});

///CREATE NEW CELEB

router.get('/celebrities/new', (req, res, next) => {

  res.render('new')
})

router.post('/celebrities', async (req, res, next) => {

const {name, occupation, catchPhrase} = req.body

 await Celebrity.create({name, occupation, catchPhrase})
  res.redirect('/celebrities')

});

/// DELETE CELEBS

router.post('/celebrities/:id/delete', (req, res, next) => {

  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/celebrities'))

  .catch(error => next(error))
});


/// EDIT CELEBS

router.get('/celebrities/edit', (req, res, next) => {
  Celebrity.findOne({_id: req.query.celebId})
  .then(celebId => {
    res.render('celebrities-edit', {celebId});
    
  })
  
  .catch(err => next(err))
  
})

router.post('/celebrities/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
 // console.log(req.query.celebId)
  Celebrity.update({_id: req.query.celebId}, { $set: {name, occupation, catchPhrase }}, {new: true})
  .then((celebrities) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

/// GET CELEBS BY ID

router.get('/celebrities/:celebId', (req, res, next) => {
   
  Celebrity.findOne({'_id': req.params.celebId})
    .then(celebId => {
      res.render('celebrities-show', { celebrities: celebId });
      //console.log(celebId)
    })
    .catch(error => {
      console.log('Error while retrieving celebrities details: ', error);
    })
});

// END OF CELEBRITIES
//////////////////////////////////////////////////////////////////
//BEGIN OF MOVIES



router.get('/movies', (req, res, next) => {
  Movie.find()

    .then(moviesFromDB => {
     // console.log('Retrieved celebs from DB:', celebsFromDB);
      res.render('movies', { movies: moviesFromDB });
    })
  .catch(error => {
    console.log('Error while getting the movies from the DB: ', error);
  });
});


////// CREATE MOVIE

router.get('/movies/new-movie', (req, res, next) => {
  
  res.render('new-movie')
})

router.post('/movies', async (req, res, next) => {
  
  const {title, genre, plot} = req.body
  
  await Movie.create({title, genre, plot})
  res.redirect('/movies')
  
});


/// DELETE MOVIES

router.post('/movies/:id/delete', (req, res, next) => {

  Movie.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/movies'))

  .catch(error => next(error))
});


// EDIT MOVIES

router.get('/movies/edit', (req, res, next) => {
  Celebrity.findOne({_id: req.query.moviesId})
  .then(moviesId => {
    res.render('movies-edit', {moviesId});
    
  })
  
  .catch(err => next(err))
  
})

router.post('/movies/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
 // console.log(req.query.moviesId)
  Celebrity.update({_id: req.query.moviesId}, { $set: {name, occupation, catchPhrase }}, {new: true})
  .then((movies) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});

/// GET MOVIES BY ID

router.get('/movies/:moviesId', (req, res, next) => {
   
  Movie.findOne({'_id': req.params.moviesId})
    .then(moviesId => {
      res.render('movies-show', { movies: moviesId });
      //console.log(moviesId)
    })
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
    })
});
module.exports = router;