const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie')

/* GET home page */
router.get('/movies', (req, res) => {
  Movies.find()
    .then(moviesDb => {
      console.log('the movies =>>>', moviesDb)
      res.render('movies/movies', {
        moviesDb
      });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
      next();
    })
});

router.get('/movies/:id', (req, res, next) => {
  const thisId = req.params.id;
  // console.log('>>>>>>>>>>>>>>',thisId)
  Movies.findById(thisId)
    .then(moviesDb => {
      console.log('the movies =>>>', moviesDb)
      res.render('movies/movie-id', {
        moviesDb
      });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
      next();
    })
});

//rota que renderiza após adicionar
router.get('/movies-new', (req, res) => {
  res.render('movies/movies-new')
})
//rota com método para criar
router.post('/movies', (req, res) => {
  console.log(req.body)
  Movies.create(req.body)
  .then(() => res.redirect('/movies'))
  .catch(error => {throw new Error(error)})
})

//rota com método para deletar
router.post('/movies/:id/delete', (req, res) => {
  const thisId = req.params.id;
  Movies.findByIdAndRemove(thisId)
    .then(() => res.redirect('/movies'))
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

//rota que renderiza após adicionar
router.get('/movies/:id/edit', (req, res) => {
  const thisId = req.params.id;
  // console.log('>>>>>>>>>>>>>>',thisId)
  Movies.findById(thisId)
    .then(movieDb => {
      console.log('the movies =>>>', movieDb)
      res.render('movies/movies-edit', {
        movieDb
      });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
      next();
    })
});
//rota com método para criar
router.post('/movies/:id/edit', (req, res) => {
  const thisId = req.params.id;
  // console.log(req.body)
  Movies.findByIdAndUpdate(thisId, req.body)
  .then(() => res.redirect('/movies'))
  .catch(error => {throw new Error(error)})
})


module.exports = router;