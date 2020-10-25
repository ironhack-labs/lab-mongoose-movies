const express = require('express');
const router  = express.Router();
var Movie = require('../models/movie.js')

router.get('/', async (req, res, next) => {
    try{
      let allFilms = await Movie.find()
        console.log('Retrieved celebrities from DB:', allFilms);
        res.render('movies/index', {allFilms});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
});


router.get('/add', (req, res, next) => {  
    res.render('movies/new');   
});

router.post('/', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newFilm = new Movie({title, genre, plot});
  newFilm.save()
    .then((book) => {
      res.redirect('/');
    })
    .catch((error) => {
      //console.log(error);
    })
});


router.get('/:id/edit', async (req, res, next) => {
    try{
       let film = await Movie.findById(req.params.id)
        console.log('Retrieved celebrities from DB:', req.params.id);
        res.render('movies/edit', {film});
    }catch(err){
        console.log('Error while getting the celebrity: ', err);
    }
  });
  
  router.post('/:id', async (req, res, next) => {
    const {title, genre, plot} = req.body;
    Movie.updateOne(
    { _id: req.params.id },
    { $set: { title, genre, plot } }
  )
    .then((book) => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
    });
  });
  
  router.post('/:id/delete', async (req, res, next) => {
    try{
       let film = await Movie.findByIdAndRemove(req.params.id)
        console.log('Retrieved celebrities from DB:', req.params.id);
        res.redirect('/');
    }catch(err){
        console.log('Error while getting the celebrity: ', err);
    }
  });

router.get('/:id', async (req, res, next) => {
    try{
      let film = await Movie.findById(req.params.id)
        res.render('movies/show', {film});
    }catch(err){
        console.log('Error while getting the celebrity: ', err);
    }
});

module.exports = router;