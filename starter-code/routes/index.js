const express = require('express')
const router = express.Router()

const {
  celebrityView,
  celebrityDetail,
  newCelebrity,
  newCelebrityProcess,
  celebrityDelete,
  editCeleGet,
  editCelePost,
} = require('../controllers/celebritry.controller')

const {
  movieView,
  movieDetail,
  newMovie,
  newMovieProcess,
  movieDelete,
  editMovieGet,
  editMoviePost
} = require('../controllers/movie.controller')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

//-------------------------Celebrities----------------------------------------------------------

//Crear
router.get('/celebrity/new', newCelebrity)
router.post('/celebrity/new', newCelebrityProcess)
//Read
router.get('/celebrity', celebrityView)
router.get('/celebrity/:id', celebrityDetail)
//Update
router.get('/celebrity/edit/:id', editCeleGet)
router.post('/celebrity/edit/:id', editCelePost)
//Delete
router.get('/celebrity/delete/:id', celebrityDelete)

//---------------------------Movies---------------------------------------------------------------

//Crear
router.get('/movie/new', newMovie)
router.post('/movie/new', newMovieProcess)
//Read
router.get('/movie', movieView)
router.get('/movie/:id', movieDetail)
//Update
router.get('/movie/edit/:id', editMovieGet)
router.post('/movie/edit/:id', editMoviePost)
//Delete
router.get('/movie/delete/:id', movieDelete)

module.exports = router
