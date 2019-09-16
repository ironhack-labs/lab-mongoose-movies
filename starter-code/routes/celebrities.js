const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

// Get all celebrities
router.get('/', async (req, res, next) => {
  const data = await Celebrity.find()
  res.render('celebrities/index', { data });
});

//Get single celebrity detail
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const data = await Celebrity.findById(id)
    res.render('celebrities/show', data)
  }
  catch (err) {
    next()
  }
});

//Add new celebrity
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  console.log(name, occupation, catchPhrase)
  try {
    await Celebrity.create({ name, occupation, catchPhrase })
  }
  catch (err) {
    res.render('celebrities/new')
  }
  res.redirect('/celebrities')
});

// Delete single celebrity
router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params
  await Celebrity.findOneAndDelete({ _id: id })
  res.redirect('/celebrities')
})


// Edit single celebrity
router.get('/:id/edit', async (req, res, next) => {
  const { id } = req.params
  try {
    const data = await Celebrity.findById(id)
    res.render('celebrities/edit', data)
  }
  catch (err) {
    res.render('celebrities/edit', { message: `There was an error: ${err}` })
    next()
  }
})

router.post('/:id', async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  const { id } = req.params
  try {
    const data = await Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    res.redirect('/celebrities')
  } catch (err) {
    res.render('celebrities/index', { message: `There was a problem editing celebrity: ${err}` })
    next()
  }
})

module.exports = router