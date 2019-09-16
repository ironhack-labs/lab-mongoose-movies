const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

// Get all celebrities
router.get('/', async (req, res, next) => {
  const data = await Movie.find()
  res.render('movies/index', { data });
});

//Get single celebrity detail
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const data = await Movie.findById(id)
    res.render('movies/show', data)
  }
  catch (err) {
    next()
  }
});

//Add new celebrity
router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/', async (req, res, next) => {
  const { title, genre, plot } = req.body
  try {
    await Movie.create({ title, genre, plot })
  }
  catch (err) {
    res.render('movie/new')
  }
  res.redirect('/movies')
});

// Delete single celebrity
router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params
  await Movie.findOneAndDelete({ _id: id })
  res.redirect('/movies')
})


// Edit single celebrity
router.get('/:id/edit', async (req, res, next) => {
  const { id } = req.params
  try {
    const data = await Movie.findById(id)
    res.render('movies/edit', data)
  }
  catch (err) {
    res.render('movies/edit', { message: `There was an error: ${err}` })
    next()
  }
})

router.post('/:id', async (req, res, next) => {
  const { title, genre, plot } = req.body
  const { id } = req.params
  try {
    const data = await Movie.findByIdAndUpdate(id, { title, genre, plot })
    res.redirect('/movies')
  } catch (err) {
    res.render('movies/index', { message: `There was a problem editing celebrity: ${err}` })
    next()
  }
})


module.exports = router