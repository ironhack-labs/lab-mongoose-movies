const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');


//get list from db
router.get('/movies', (req, res) => {
  Movies.find()
    .then(movies => {
      //console.log("from db ", allCelebrities)
      res.render('movies-views/moviesList', { movies });
    })
    .catch(err => console.log("Error finding obj in db ", err));
});
//new GET
router.get('/movies/new', (req, res) => res.render('movies-views/new'));
//new POST
router.post('/movies', (req, res) => {
  Movies.create(req.body)
    .then(saved => res.redirect('/movies'))
    .catch(err => console.log(`Err while saving new celebrity in DB: ${err}`));
});

//edit GET
router.get('/movies/:id/edit', (req, res) => {
  Movies.findById(req.params.id)
    .then(movies => {
      res.render('movies-views/edit', { movies })
    })
    .catch(err => console.log("Error finding obj in db for edit ", err))
});
//edit POST
router.post('/movies/:id/edit', (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, req.body)
    .then(updated => res.redirect('/movies'))
    .catch(err => console.log("Error updating obj in db ", err))
});



//delete
router.post('/movies/:id/delete', (req, res) => {
  Movies.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log("Error deleting obj in db ", err));
});
//details
router.get('/movies/:id', (req, res) => {
  Movies.findById(req.params.id)
    .then(found => {
      res.render('movies-views/details', found);
    })
    .catch(err => console.log(`Err while getting the specific celebrity from the  DB: ${err}`));
});
module.exports = router;
