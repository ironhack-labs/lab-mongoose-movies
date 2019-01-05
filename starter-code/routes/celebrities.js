const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrities')
const Movie = require('../models/movies')



router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    console.log(celebrities)
    res.render("celebrities/index", { celebrities });
  })
  .catch(error => {
    console.log(error)
    next(error)
  })
});

router.get('/celebrities/show/:id', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({'_id': celebrityId}).populate("moviesActed")
    .then(celebrity => {
      console.log(celebrity)
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      console.log(error)
      next(error)
    })
});


router.get('/celebrities/new', (req, res, next) => {
    Movie.find({}, function(err, movies) {
      res.render("celebrities/new", {movies: movies});
  });
});

router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchPhrase, moviesActed } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase, moviesActed });
    console.log(moviesActed)
    newCelebrity.save()
    .then(celebrity => {
        res.redirect('/celebrities');
      })
      .catch(error => {
        console.log(error)
        res.redirect('/celebrities/new');
      })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findByIdAndRemove(celebrityId)
    .then(celebrity => {
        res.redirect('/celebrities');
      })
      .catch(error => {
        console.log(error)
        res.redirect('/celebrities/new');
      })
});



router.get('/celebrities/:id/edit', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({'_id': celebrityId})
    
    .then(celebrity => {
      Movie.find({}, function(err, movies) {
      console.log(celebrity)
      res.render('celebrities/edit', { celebrity, movies: movies });
    });
    })
    .catch(error => {
      console.log(error)
      next(error)
    })
});


router.post('/celebrities/:id', (req, res, next) => {
    const { name, occupation, catchPhrase, moviesActed } = req.body;
    let celebrityId = req.params.id;
    Celebrity.findByIdAndUpdate({'_id': celebrityId},{ name, occupation, catchPhrase, moviesActed } )
    .then(celebrity => {
        res.redirect('/celebrities');
      })
      .catch(error => {
        console.log(error)
        next(error)
      })
});




module.exports = router;
