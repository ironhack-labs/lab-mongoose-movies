const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js')

/* GET show all celebrities */
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .exec()
    .then((celebList) => {
      res.render('../views/celebrities/index', { celebList })
    })
    .catch(err => next(err))
})

/* GET show a form to create a celebrity */
router.get('/new', (req, res, next) => {
  res.render('../views/celebrities/new')
})

/* POST send data from the form to this route to create the celebrity and save in the database */
router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(() => {
      // console.log(err)
      res.redirect('/celebrities/new')
    })
})

/* POST retrieve id, find by id & delete specific celebrity */
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => next(err))
})

/* GET show a form to edit a celebrity */
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById({ _id: req.params.id })
    .then((celebData) => {
      res.render('../views/celebrities/edit', celebData)
    })
    .catch(err => next(err))
})

/* POST send the data from the form to this route to update and save the celebrity to the database */
router.post('/:id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  Celebrity.update({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } })
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => next(err))
})

/* GET show a specific celebrity */
router.get('/:id', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then(celebDetails => {
      res.render('../views/celebrities/show', celebDetails)
    })
    .catch(err => next(err))
})

module.exports = router