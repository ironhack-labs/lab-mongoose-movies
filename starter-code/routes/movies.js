const express = require('express');
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

const router = express.Router();

router.get('/movies', (req, res, next) => {
    Movie.find().then((movieFromDB) => {
        console.log(movieFromDB)
        res.render('movies/index', { movies: movieFromDB })
    })
        .catch(error => `Error while creating a new movie: ${error}`);
});


router.get('/movies/new', (req, res, next) => {

    Celebrity.find().then((celebArray) => {
            res.render('movies/new', { myCelebrities: celebArray });
    })


});

router.post('/movies', (req, res, next) => {
    console.log(req.body);
    const { name, genre, plot } = req.body;

    Movie.create({ name, genre, plot })
        // .then(movieFromDB => {
        //     return User.findByIdAndUpdate(celebrities, { $push: { posts: movieFromDB._id } });
        // })
        .then(() => res.redirect('movies'))
    //   .catch(error => `Error while creating a new movie: ${error}`, res.redirect('/movies/new'));
});

router.get('/movies/:id', (req, res, next) => {

    const { id } = req.params;

    Movie.findById(id)
        .then(celebrityToEdit => {
            // console.log(droneToEdit);
            res.render('movies/show', celebrityToEdit);
        })
        .catch(error => console.log(`Error while getting a single movie for edit: ${error}`));
});


router.post('/movies/:id/delete', (req, res, next) => {
    const { id } = req.params;

    Movie.findByIdAndRemove(id)
        .then(() => res.redirect('/movies'))
        .catch(error => console.log(`Error while deleting a movie: ${error}`));
});


router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then(movieToEdit => {
      // console.log(droneToEdit);
      res.render('movies/update', movieToEdit);
    })
    .catch(error => console.log(`Error while getting a single mocie for edit: ${error}`));
});

router.post('/movie/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, genre, plot } = req.body;

  Movie.findByIdAndUpdate(id, { name, genre, plot }, { new: true })
    .then(() => {
      res.redirect('/movies')
    })

    .catch(error => console.log(`Error while updating a single drone: ${error}`));
});



module.exports = router;