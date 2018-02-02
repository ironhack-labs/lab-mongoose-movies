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
    res.render('celebrities/index', celebrities)
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
    res.render('celebrities/show', celebData)
  })
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
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
  Celebrity.findById(celebIDToEdit, (err, data) => {
    if (err) {
      next()
      return
    }
    res.render('celebrities/edit', { celebData: data })
  })
})

router.post('/:id', (req, res, next) => {
  const celebUpdatedInfo = { name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }
  const celebIDToUpdate = req.params.id
  console.log(celebIDToUpdate)
  Celebrity.findByIdAndUpdate(
    celebIDToUpdate,
    celebUpdatedInfo,
    (err, data) => {
      if (err) {
        next()
        return
      }
      res.redirect('/celebrities')
    }
  )
})

module.exports = router
