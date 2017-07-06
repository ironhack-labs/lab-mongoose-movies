const express = require('express')
const router  = express.Router()

const Movie = require('../models/Movie')


/* GET home page. */
router.get('/', (req, res, next) => {

  Movie.find({}, (err, movies) => {
    res.render('movie/index', {
      title: 'MOVIES',
      movies: movies
    })
  })
})

/* POST home page. */
router.post('/', (req, res, next) => {
  let {title, gerne, plot} = req.body;

  let movie = new Movie({
    title,
    gerne,
    plot
  });
  movie.save((err, obj) => {
    if(err){
      res.redirect('/movies/new');
    }
   res.redirect('/movies');
  });

})

/* GET home page. */
router.get('/new', (req, res, next) => {
  res.render('movie/new', {
    title: 'MOVIES',
    movie: {},
    action: '/movies',
    method: 'post'
  })
})

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id, (err, movie) => {

    if(err){
      next(err);
    }

    res.render('movie/show', {
      title: 'SHOW',
      movie: movie
    })
  })
})

router.post('/:id', (req, res, next) => {
  let id = req.params.id
  let {title, gerne, plot} = req.body;

  let movie = {
    title,
    gerne,
    plot
  }

  console.log(id)
  Movie.findByIdAndUpdate(id, movie, (err, obj) => {
    if (err){ next(err); }
    res.redirect("/movies")

  })
})

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id
  console.log(id)
  Movie.findById(id, (err, obj) => {
    if (err){ next(err) }
      res.render('movie/new', {
        title: 'MOVIES',
        movie: obj,
        action: `/movies/${id}` ,
        method: 'post'
      })
  })
})

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id
  console.log(id)
  Movie.findByIdAndRemove(id, (err, obj) => {
    if (err){ next(err); }
    res.redirect("/movies")
  });
})

module.exports = router
