const express = require('express');

const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

const router = express.Router();


// GET /movies
router.get('/', (req, res, next) => {

  Movie.find(null, null, { sort: { title: 1 } }).then((moviesFromDB) => {
    console.log(moviesFromDB);
    res.render('movies/index', { allTheMovies: moviesFromDB })
  })
});


// GET /movies/new
// show form to the user
// tricky case: keep it above the code rendering /:id route! in other case browser will try to render "new" as an id and it will cause an error
router.get('/new', (req, res, next) => {

  // only loggeg in users can see the form
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    // give the possibility to add a celebrity while creating new movie
    Celebrity.find().then((celebritiesFromDB) => {
      res.render('movies/new', { allTheCelebrities: celebritiesFromDB });
    });
  }

});


// GET /movies/:id
router.get('/:id', (req, response, next) => {

  Movie.findById(req.params.id)
    .populate('celebrities')
    .then((movie) => {
      response.render('movies/show', movie);
    });

});


// POST /movies/new
// pick up data from submitted form
// name: req.body.name = ModelPropertyName.req.body.formInputFieldName
router.post('/new', (req, res, next) => {

  // console.log(req.body);
  // only loggeg in users can create a new movie
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    Movie.create({ title: req.body.title, genre: req.body.genre, plot: req.body.plot, celebrities: [req.body.celebrity] })
      .then(dbMovie => {
        return Celebrity.findByIdAndUpdate(req.body.celebrity, { $push: { movies: dbMovie._id } });
      })
      .then(() => {
        res.redirect('/movies')
      });
  }
});


// POST /movies/id/delete
router.post('/:id/delete', (req, res, next) => {


  Movie.findByIdAndDelete(req.params.id) // builds a query to get and delete a document
    .exec() // executes the query and returns a promise for the document
    .then(dbMovie => { // takes deleted movie object
      const removeMovieId = celebrityId => Celebrity.findByIdAndUpdate(celebrityId, { $pull: { movies: dbMovie._id } }).exec();
      // findByIdAndUpdate() method builds another query to get and update a document (pull out the movie id from celebrity document)
      return Promise.all(dbMovie.celebrities.map(removeMovieId));

      // return Promise.all(dbMovie.celebrities.map(celebrityId => Celebrity.findByIdAndUpdate(celebrityId, { $pull: { movies: dbMovie._id } }).exec()));
      // dbMovie.celebrities.map() > use .map() on a movie object, get the celebrities array (in that object)

    }).then(() => {
      res.redirect('/movies');
    });

});


// GET movies/id/edit
router.get('/:id/edit', (req, res, next) => {

  Movie.findById(req.params.id).then((movie) => {
    res.render('movies/edit', movie)
  })
});


// POST movies/id/edit
router.post('/:id/edit', (req, res, next) => {

  Movie.findByIdAndUpdate(req.params.id, { name: req.body.title, genre: req.body.genre, plot: req.body.plot }).then(() => {
    res.redirect('/movies')
  })
});


module.exports = router;