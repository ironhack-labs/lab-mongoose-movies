const express = require('express');
const CelebrityModel = require('../models/Celebrity.model');
const MovieModel = require ('../models/Movie.model');
const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res, next) => {
  const celebrities = await CelebrityModel.find()
  res.render('celebrities/index', {celebrities});
});

router.get('/celebrities/:id', async (req, res) => {
  const {id} = req.params
  const celebrity = await CelebrityModel.findById(id)
  res.render('celebrities/celebrityDetails', celebrity)
})

/*mostrar el form */
router.get('/new', (req, res) => {
  res.render('celebrities/new')
})

router.post("/create", async (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  await CelebrityModel.create({
    name,
    occupation,
    catchPhrase
  })
  res.redirect(`/`)
})


router.get("/celebrities/delete/:Id", async (req, res) => {
  const { Id } = req.params
  await CelebrityModel.findByIdAndDelete(Id)
  res.redirect("/")
})


/*movies*/ 
router.get('/movies', async (req, res, next) => {
  const movies = await MovieModel.find()
  res.render('movies/index', {movies});
});

router.get('/movies/:id', async (req, res) => {
  const {id} = req.params
  const movie = await MovieModel.findById(id)
  res.render('movies/movieDetails', movie)
})

router.get('/newMovie', (req, res) => {
  res.render('movies/newMovie')
})

router.post("/createMovie", async (req, res) => {
  const { title, genre, plot } = req.body
  await MovieModel.create({
    title,
    genre,
    plot
  })
  res.redirect(`/`)
})

router.get("/movies/delete/:Id", async (req, res) => {
  const { Id } = req.params
  await MovieModel.findByIdAndDelete(Id)
  res.redirect("/")
})


module.exports = router;
