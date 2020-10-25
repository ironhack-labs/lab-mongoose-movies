const Movie = require("../models/movie");

const express = require('express');
const router  = express.Router();

/* GET MOVIES page */

router.get('/', async (req, res, next) => {
    try{
      let movie = await Movie.find()
        res.render('movies/index', {movie});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });

  router.get('/new', async (req, res, next) => {
    res.render("movies/new")
  });

  router.post('/new', async (req, res, next) => {
    try{
      const { title, genre, plot } = req.body
      //await Celebrity.findById(req.params.id)
      const movie = new Movie({ title, genre, plot })
      const newMovie = await movie.save();
      res.redirect("/movies");
    }catch(err){
        res.render("movies/new")
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });

  router.get('/:id/edit', async (req, res, next) => {
    try{
        let movie = await Movie.findById(req.params.id)
        res.render("movies/edit", {movie})
    } catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });



  router.get('/:id', async (req, res, next) => {
    try{
      let movie = await Movie.findById(req.params.id)
        res.render('movies/show', {movie});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });

  router.post('/:_id', async (req, res, next) => {
    try{
        const { title, genre, plot } = req.body
  await Movie.update({ _id: req.query._id }, { $set: { title, genre, plot} }, { new: true })
  await res.redirect("/movies")

    } catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });


  router.post('/:id/delete', async (req, res, next) => {
    try{
      let movie = await Movie.findByIdAndRemove(req.params.id)
      res.redirect("/movies");
    }catch(err){
        next()
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });



module.exports = router;