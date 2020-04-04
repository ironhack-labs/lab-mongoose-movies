const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    Movie.find()
                      .then(data => {
                        console.log(data);
                        res.render('movies/index', {data});
                      })
                      .catch( err => {
                        throw new Error(err);
                    });
    
  });

  router.post('/', async (req, res, next) => {
    const { title, genre, year, director, plot} = req.body;
    await new Movie({title,genre,year,director,plot}).save();
    res.redirect('movies/');
    
  });

  router.get('/new', (req,res,next) => {
      res.render('movies/new-movie');
  })

  router.get('/:id', (req, res, next) => {
    console.log(req.params)
    const {id} = req.params;

    Movie.findOne({_id: id})
            .then(data => {
            console.log(data);
            res.render('movies/movie-details', data);
            })
            .catch( err => {
            throw new Error(err);
        });
    
  });

  router.post('/:id/delete', async (req,res,next) => {
    const {id} = req.params;
    try {
        await Movie.findByIdAndRemove({_id: id});
        res.redirect('/movies');
    } catch (error) {
        console.log(error);
        res.redirect('/movies');

    }
  })

  router.get('/:id/edit', async (req,res,next) => {
    console.log(req.params);
    const {id} = req.params;
    try {
        const data = await Movie.findById({_id: id});
        console.log(data);
        res.render('movies/edit-movie',data);
        
    } catch (error) {
        console.log(error);
        res.render('movies/edit',data);
    }
   
  })

  router.post('/:id/edit', async (req,res,next) => {
    const update = {...req.body};
    console.log(update);
    const {id} = req.params;
    console.log(id);
    try {
        await Movie.findOneAndUpdate({_id: id},update);
        res.redirect('/movies');
        
    } catch (error) {
        console.log(error);
        res.redirect('/movies');
    }
   
  })


  module.exports = router;
