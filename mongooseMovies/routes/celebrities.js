const express = require('express')

const Celebrity = require('../models/celebrity')

const router = express.Router()

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, data) => {
    if (err) {
      next()
      return
    }
    const celebrities = {
      celebrities: data
    }
    res.render('celebrities', celebrities)
  })
})

router.get('/:id', (req, res, next) => {
  const celebID = req.params.id
  Celebrity.findById(celebID, (err, data) => {
    if (err) {
      next()
      return
    }
    const celebData = { celebData: data }
    res.render('show', celebData)
  })
})

router.get('/new', (req, res, next) => {
  res.render('new')
})

router.post('/', (req, res, next) => {
  let newCelebrityInfo = { name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }

  let newCelebrity = new Celebrity(newCelebrityInfo)
  newCelebrity.save(err => {
    if (err) {
      next()
    }
    res.redirect('/celebrities')
  })
})

router.post('/:id/delete', (req, res, next) => {
  const celebIdToDelete = req.params.id

  Celebrity.findByIdAndRemove(celebIdToDelete, (err, data) => {
    if (err) {
      next()
      return
    }
    res.redirect('/celebrities')
  })
})

router.get('/:id/edit', (req, res, next) => {
  const celebIDToEdit = req.params.id
  Celebrity.findById(celebID, (err, data) => {
    if (err) {
      next()
      return
    }
    const celebData = { celebData: data }
    res.render('edit', celebData)
  })
})

router.post('/:id', (req, res, next) => {
  let celebUpdatedInfo = { name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }

  const celebIDToUpdate = req.params.id
  Celebrity.update(celebID, celebUpdatedInfo, (err, data) => {
    if (err) {
      next()
      return
    }
    res.redirect('/celebrities')
  })
})

module.exports = router
