const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Celebrity = require('../models/celebrity.model')

router.get('/celebrities', (req, res) => {

  Celebrity
    .find()
    .then(celebs => {
      res.render('celebrities/index', { celebs })
    }) //, error: req.query.error }))
    .catch(err => console.log('ERROR:', err))
})

router.get('/celebrity/:celeb_id', (req, res) => {

  const celeb_id = req.params.celeb_id

  // if (!mongoose.Types.ObjectId.isValid(celeb_id)) {
  //   res.redirect('/celebrities/index?error= The celebrities ID is not valid')
  //   return
  // }

  Celebrity
    .findById(celeb_id)
    // .populate('author')         // nombre del campo
    .then(celeb => {
      console.log(celeb)
      res.render('celebrities/show', celeb)
    })
    .catch(err => console.log(err))
})

router.get('/celebrities/new', (req, res) => res.render('celebrities/new'))

router.post('/celebrities/new', (req, res) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity
    .create({ name, occupation, catchPhrase })
    .then(celeb => res.redirect(`/celebrities`))
    .catch(err => console.log(err))
})

router.post('/celebrities/:id/delete', (req, res) => {

  const celebs_id = req.params.id

  Celebrity
    .findByIdAndRemove(celebs_id)
    .then(celeb => res.redirect(`/celebrities`))
    .catch(err => console.log(err))
})


router.get('/celebrities/:id/edit', (req, res) => {

  const celebs_id = req.params.id
  Celebrity
    .findById(celebs_id)
    .then(celeb => res.render('celebrities/edit', celeb))
    .catch(err => console.log(err))
})

router.post('/celebrities/:id/edit', (req, res) => {

  const { name, occupation, catchPhrase } = req.body
  const celeb_id = req.params.id

  Celebrity
    .findByIdAndUpdate(celeb_id, { name, occupation, catchPhrase })
    .then(celebrity => res.redirect(`/celebrities`))
    .catch(err => console.log(err))
})



module.exports = router