const express = require('express');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req,res,next)=>{
  const celebrities = await Celebrity.find();
  res.render('celebrities/index', {celebrities});
});

router.get('/celebrities/new', async (req, res, next)=>{
  res.render('celebrities/new');
})

router.get('/celebrities/:id', async (req,res,next)=>{
  const celebrity = await Celebrity.findById(req.params.id);
  console.log(celebrity);
  res.render('celebrities/show', {celebrity});
});

router.post('/celebrities', async(req,res,next)=>{
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});
  await newCelebrity.save();
  res.redirect('/celebrities');
});

router.post('/celebrities/:id/delete', async(req,res,next)=>{
  await Celebrity.findByIdAndDelete(req.params.id);
  res.redirect('/celebrities');
});

router.get('/celebrities/:id/edit', async(req,res,next)=>{
  const celebrity = await Celebrity.findById(req.params.id);
  console.log(celebrity);
  res.render('celebrities/edit', {celebrity});
});

router.post('/celebrities/:id', async(req,res,next)=>{
  const {name, occupation, catchPhrase} = req.body;
  await Celebrity.update(
    {_id:req.params.id},
    {$set:{name, occupation, catchPhrase}});
  const celebrity = await Celebrity.findById(req.params.id);
  res.redirect('/celebrities');
});

router.get('/movies', async(req,res,next)=>{
  const movies = await Movie.find();
  console.log(movies);
  res.render('movies/index', {movies});
});

router.get('/movies/new', async (req, res, next)=>{
  res.render('movies/new');
});

router.get('/movies/:id', async(req,res,next)=>{
  const movie = await Movie.findById(req.params.id);
  res.render('movies/show', {movie});
});

router.post('/movies', async(req,res,next)=>{
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});
  await newMovie.save();
  res.redirect('/movies');
});


router.post('/movies/:id/delete', async(req,res,next)=>{
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect('/movies');
});

router.get('/movies/:id/edit', async(req,res,next)=>{
  const movie = await Movie.findById(req.params.id);
  console.log(movie);
  res.render('movies/edit', {movie});
});

router.post('/movies/:id', async(req,res,next)=>{
  const {title, genre, plot} = await req.body;
  console.log(plot);
  await Movie.update(
    {_id:req.params.id},
    {$set:{title, genre, plot}});
  const movie = await Movie.findById(req.params.id);
  res.redirect('/movies');
});

module.exports = router;
