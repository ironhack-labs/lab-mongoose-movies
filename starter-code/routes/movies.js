const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log(error)
    })
  });


  router.get('/movies/new', (req, res, next) => {
    res.render("movies/new");
});

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMov = new Movie({title, genre, plot})
  newMov.save()
  .then(movie => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});


  router.get('/movies/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({'_id': movieId})
      .then(movie => {
        res.render("movies/show", { movie });
      })
      .catch(error => {
        console.log(error)
      })
    });

  // router.get('/celebrities/:id', (req, res, next) => {
  //   let celebId = req.params.id;
  //   Celebrity.findOne({'_id': celebId})
  //     .then(celebrity => {
  //       res.render("celebrities/show", { celebrity });
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   });


  //   router.post('/celebrities/:id/delete', (req, res, next) => {
  //     let celebId = req.params.id;
  //     Celebrity.findByIdAndRemove(celebId)
  //     .then(celebrity => {
  //       res.redirect('/celebrities');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //   });

  //   router.get('/celebrities/edit/:id', (req, res, next) => {
  //     let celebId = req.params.id;
  //     Celebrity.findOne({'_id': celebId})
  //       .then(celebrity => {
  //         res.render("celebrities/edit", { celebrity });
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //     });
      
  //     router.post('/celebrities/edit/:id', (req, res, next) => {
  //       const { name, occupation, catchPhrase } = req.body;
  //       Celebrity.update({_id: req.params.id}, { $set: {name, occupation, catchPhrase}}, {new:true})
  //       .then(celebrity => {
  //         res.redirect('/celebrities/'+req.params.id);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //     });
  

module.exports = router;