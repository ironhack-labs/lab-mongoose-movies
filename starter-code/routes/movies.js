const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

// GET index
router.get('/', async (req, res, next) => {
  try {
    const data = await Movie.find();
    res.render('movies/index', { data });
  } catch (error) {
    console.log(error);
    next();
  }
});

// GET new
router.get('/new', async (req, res, next) => {
  res.render('movies/new');
});

// //POST new
router.post('/new', async (req, res, next) => {
  try {
    const data = await Movie.create(req.body);
    console.log(`New movie added: ${data}`);
    res.redirect('/movies');
  } catch (error) {
    console.log(error);
    next();
  }
});

  //GET show
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Movie.findById(id);
    res.render('movies/show', { data });
  } catch (error) {
    console.log(error);
    next();
  }
});

//GET delete
router.get('/delete/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Movie.findByIdAndRemove(req.params.id)
    console.log(`${data.name} deleted`);
    res.redirect('/movies');
  } catch (error) {
    console.log(error);
  }  
});

//GET edit 
router.get('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Movie.findById(id);
    res.render('movies/edit', { data });
  } catch (error) {
    console.log(error);
    next();
  }
});

//POST edit
router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Movie.findByIdAndUpdate(id, req.body);
    console.log(`Movie edited: ${data}`);
    res.redirect('/movies')
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;
