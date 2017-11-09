var express = require('express');
const Movie = require('../models/movie');

var router = express.Router();

/* GET celebrities listing. */
router.get('/movies', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) {return next(err);}

    res.render('movies/index', {movies: movies});
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  let celebrityInfo = {
    name: req.body._name,
    occupation: req.body._occupation,
    catchPhrase: req.body._catchPhrase};

  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save( (err) => {
    if (err) {
      return res.render('celebrities/new', {celebrity: newCelebrity});
    }
    return res.redirect('/celebrities');
  });
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {return next(err);}
    res.render('celebrities/show', {celebrity: celebrity});
  });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id;

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities');
  });
});

module.exports = router;
