const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')



/* GET celebrity page */
router.get('/', (req, res, next) => {
    Movie.find()
    .then( movieList => {
        res.render('movies',{movieList})
    })
    .catch(err => {
        next(err)
      })
  });

router.get('/movie/:id',(req, res, next) => {
    const {id} = req.params
    Movie.findById(id)
    .then( one => {
        res.render('movies/movie', one)
    })
    .catch(err => {
        next(err)
      })
});

router.get('/add',(req, res, next) => {
    res.render('movies/add')
})

router.post('/add', (req, res, next) => {
    const {title,genre,plot} = req.body
    Movie
    .create ({title,genre,plot})
    .then(() => res.redirect('/movies'))
    .catch(err => {
        next(err)
      })
})

router.post('/:id/delete',(req, res, next) => {
    const {id} = req.params
    Movie
    .findByIdAndRemove(id)
    .then(() => res.redirect('/movies'))
    .catch(err => {
        next(err)
        })
})


router.get('/edit/:id', (req, res, next) => {
    const {id} = req.params
    Movie.findById(id)
      .then(mov => {
        res.render('movies/edit-movies', mov)
      })
      .catch(err => {
        next(err)
      })
  })
  
  router.post('/edit/:id', (req, res, next) => {
    const {title,genre,plot} = req.body
    Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {title,genre,plot}},{new:true})
      .then(result => {
        console.log(result)
       res.redirect('/movies')
  
      })
      .catch(err => {
        next(err)
      })
  })

module.exports = router;