const express = require('express');
const Movie = require('../models/Movie.model');
const router  = express.Router();


router.get('/', (req,res, next)=>{ Movie.find()
.then((movies) => res.render('movies/movies', {movie:movies}))
.catch(err => res.render('index'))
});

router.get('/new', (req, res, next) => {
  res.render('movies/newMovie');
});

router.post('/new', (req, res) => {
   const {  title, genre, plot} = req.body;
  Movie.create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
   .catch(error => res.render('movies/new'));
});


router.get('/:id', (req,res, next)=>{Movie.findById(req.params.id)
  .then((movie) => res.render('movies/showMovies', movie))
  .catch(err => res.render('index'))
  });

 router.post('/:id/delete', (req, res, next) => {
   Movie.findByIdAndDelete(req.params.id)
     .then(() => {
       res.redirect('/movies'); 
     })
     .catch(err => console.error('Error deleting the Movie', err));
 });
 
router.get('/:id/edit', (req, res) => {
  Movie.findById(req.params.id)
    .then(movieToEdit => {
      res.render('movies/movie-edit', movieToEdit); 
    })
    .catch(error => console.log(`Error while getting a single movie for edit: ${error}`));
});

router.post('/:id/edit', (req, res) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(id, { title, genre, plot }, { new: true })
    .then(updatedmovie => res.redirect(`/movies/${updatedmovie._id}`))
    .catch(error => console.log(`Error while updating a single movie: ${error}`));
});

 
module.exports = router;


