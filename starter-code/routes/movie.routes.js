const express = require('express');
const router  = express.Router();

const MovieModel = require('../models/movie-model')

/* GET home page */
router.get('/movies', (req, res, next) => {
  console.log("Hey its the movie page")
    MovieModel.find()
      .then((movies) => {
        console.log(movies)

        res.render('movies/index.hbs', {movies})
      })
      .catch((err) => {
        console.log('Oh-no!', err)
        next()
      })
  });

  router.get('/movies/:id', (req, res, next) => {
    let myId = req.params.id
    
    MovieModel.findById(myId)
      .then((result) => {
        console.log(result)
        res.render('movies/show.hbs', {result})
      })
      .catch((err) => {
        console.log('Oh-no! there is an error', err)
        next()
      })
    });

    //one page to render page with the form on it
    router.get('/movies/new', (req, res, next) => {
      res.render('movies/new')
    });

    //one page to send the data to after the form is filled out
    router.post('/movies', (req, res, next) => {
      // console.log("Req body is :", req.body)
      MovieModel.create(req.body)
        .then(() => {
          res.redirect('/movies') 
        })
      
    });

    router.post('/movies/:id/delete', (req, res, next) => {
      // console.log("Req body is :", req.body)
      let myId = req.params.id
      MovieModel.findByIdAndDelete(myId)
        .then(() => {
          res.redirect('/movies') 
        })
      
    });

module.exports = router;