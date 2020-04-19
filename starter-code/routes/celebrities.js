const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity-model')

//READ
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebrities => res.render('celebrities/index', { celebrities: allTheCelebrities }))
    .catch(error => {
      next()
      return `An error has occured: ${error}`
    })
})

router.get('/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(foundCelebrity => res.render('celebrities/show', foundCelebrity))
    .catch(error => {
      next()
      return `An error has occured: ${error}`
    })
})

//CREATE

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/new', (req, res, next) => {
  const { name, image, occupation, catchPhrase } = req.body

  Celebrity.create({ name, image, occupation, catchPhrase })
    .then(newCeleb => res.redirect('/celebrities'))
    .catch(error => {
      res.redirect('celebrities/new')
      return `An error has occured: ${error}`
    })
})

//DELETE

router.post('/:celebrityId/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(res.redirect('/celebrities'))
    .catch(error => {
      next()
      return `An error has occured: ${error}`
    })
})

//UPDATE

router.get('/:celebrityId/edit', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(foundCelebrity => res.render('celebrities/edit', foundCelebrity))
})

router.post('/:celebrityId/edit', (req, res, next) => {
  const { name, image, occupation, catchPhrase } = req.body

  Celebrity.findByIdAndUpdate(req.params.celebrityId, { name, image, occupation, catchPhrase })
    .then(res.redirect('/celebrities'))
    .catch(error => {
      next()
      return `An error has occured: ${error}`
    })
})

module.exports = router