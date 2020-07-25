const express = require('express');
const router  = express.Router();
const Celebrity = require('../model/Celebrity');
const Movie = require('../model/Movie');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then( celebrity => {
            console.log('Celebrities: ', celebrity)
            res.render('celebrities/index', {celebrity})
        })
        .catch( (err) => {
            next(err)
        })
  });
  
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.post('/celebrities/new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    console.log(req.body);
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase});
    newCelebrity.save()
        .then( () => {
          res.redirect('/celebrities')
        })
        .catch( (err) => {
          console.log(err);
          res.redirect('/celebrities/new')
        })
    })

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then( (celebrity) => {
          console.log(celebrity)
          res.render('celebrities/show', {celebrity})
        })
        .catch( (err) => {
          next(err)
        })
    });

router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then( (celebrity) => {
          console.log(celebrity)
          res.redirect('/celebrities')
        })
        .catch( (err) => {
          next(err)
        })
    });

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
      .then( (celebrity) => {
        console.log(celebrity)
        res.render('celebrities/edit', {celebrity})
      })
      .catch( (err) => {
        next(err)
      })
  });

  router.post('/celebrities/:id/edit', (req, res, next) => {
    const celebrityId = req.params.id;
    const {name, occupation, catchPhrase} = req.body
    Celebrity.update(
      { _id: celebrityId },
      { $set: { name, occupation, catchPhrase } }
    )
    .then( (celebrity) => {
      res.redirect('/celebrities')
    })
    .catch( (err) => {
      next(err)
    })
  });

///////////////////////////////////////////////////////

router.get('/movies', (req, res, next) => {
  Movie.find()
      .then( movie => {
          console.log('movies: ', movie)
          res.render('movies/index', {movie})
      })
      .catch( (err) => {
          next(err)
      })
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
});

router.post('/movies/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  console.log(req.body);
  const newmovie = new Movie({ title, genre, plot});
  newmovie.save()
      .then( () => {
        res.redirect('/movies')
      })
      .catch( (err) => {
        console.log(err);
        res.redirect('/movies/new')
      })
  })

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
      .then( (movie) => {
        console.log(movie)
        res.render('movies/show', {movie})
      })
      .catch( (err) => {
        next(err)
      })
  });

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
      .then( (movie) => {
        console.log(movie)
        res.redirect('/movies')
      })
      .catch( (err) => {
        next(err)
      })
  });

router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then( (movie) => {
      console.log(movie)
      res.render('movies/edit', {movie})
    })
    .catch( (err) => {
      next(err)
    })
});

router.post('/movies/:id/edit', (req, res, next) => {
  const movieId = req.params.id;
  const {title, genre, plot} = req.body
  Movie.update(
    { _id: movieId },
    { $set: { title, genre, plot } }
  )
  .then( (movie) => {
    res.redirect('/movies')
  })
  .catch( (err) => {
    next(err)
  })
});

module.exports = router;
