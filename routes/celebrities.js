const express = require('express');
const { findById } = require('../models/Celebrity.model');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', async (req, res) => {
  const celebrities = await Celebrity.find()
  res.render('celebrities/index', {celebrities})
})

router.get('/celebrities/new', async (req, res) => res.render('celebrities/new'))

router.get('/celebrities/:id', async (req, res) => {
  try {
    const {id} = req.params
    const celebrity = await Celebrity.findById(id)
    console.log(celebrity)
    res.render('celebrities/show', celebrity)
  } catch(e) {
    console.log(e, "🚑 Error")
  }
})

router.post('/celebrities', async (req, res) => {
  const {name, occupation, cathPhrase} = req.body
  if (!name || !occupation || !cathPhrase) {
    res.render('celebrities/new')
  }
  console.log('Celebritie Created')
  await Celebrity.create({name, occupation, cathPhrase})
  res.redirect("/celebrities")
})

router.post('/celebrities/:id/delete', async (req, res) => {
  console.log(req.params)
  const {id} = req.params
  await Celebrity.findByIdAndDelete(id)
  res.redirect('/celebrities')
})

router.get('/celebrities/:id/edit', async (req, res) => {
  const {id} = req.params
  console.log(id)
  const celebrity = await Celebrity.findById(id)
  console.log(celebrity)
  res.render('celebrities/edit', celebrity)
})

router.post('/celebrities/:id', async (req, res) => {
  const {name, occupation, catchPhrase} = req.body
  const {id} = req.params
  await Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
  res.redirect(`/celebrities/${id}`)
})

module.exports = router