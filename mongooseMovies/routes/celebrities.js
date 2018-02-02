const express = require('express')

const Celebrity = require('../models/celebrity')

const router = express.Router()

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, data) => {
    if (err) {
      return next(err)
    }
    const celebrities = {
      celebrities: data
    }
    res.render('celebrities/index', celebrities)
  })
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.get('/:id', (req, res, next) => {
  const celebID = req.params.id
  Celebrity.findById(celebID, (err, data) => {
    if (err) {
      return next(err)
    }
    const celebData = { celebData: data }
    res.render('celebrities/show', celebData)
  })
})

router.post('/', (req, res, next) => {
  const newCelebrityInfo = { name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }

  const newCelebrity = new Celebrity(newCelebrityInfo)
  newCelebrity.save(err => {
    if (err) {
      return next(err)
    }
    res.redirect('/celebrities/index')
  })
})

router.post('/:id/delete', (req, res, next) => {
  const celebIdToDelete = req.params.id

  Celebrity.findByIdAndRemove(celebIdToDelete, (err, data) => {
    if (err) {
      return next(err)
    }
    res.redirect('/celebrities')
  })
})

router.get('/:id/edit', (req, res, next) => {
  const celebIDToEdit = req.params.id
  Celebrity.findById(celebIDToEdit, (err, data) => {
    if (err) {
      return next(err)
    }
    res.render('celebrities/edit', { celebData: data })
  })
})

router.post('/:id', (req, res, next) => {
  const celebUpdatedInfo = { name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }
  const celebIDToUpdate = req.params.id
  Celebrity.findByIdAndUpdate(
    celebIDToUpdate,
    celebUpdatedInfo,
    (err, data) => {
      if (err) {
        return next(err)
      }
      res.redirect('/celebrities')
    }
  )
})

module.exports = router
