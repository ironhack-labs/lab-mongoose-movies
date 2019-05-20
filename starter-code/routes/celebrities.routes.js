// Requires
const express = require('express')
const router = express.Router()
// Requerimos el modelo Celebrity
const Celebrity = require('../models/Celebrity')



// Celebrities list
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritries => res.render('celebrities/index', { celebrities: allCelebritries }))
    .catch(error => console.log(error))
})

// Celebrity detail
router.get('/list/:celebrity_id', (req, res, next) => {
  Celebrity.findById(req.params.celebrity_id)
    .then(theCelebrity => res.render('celebrities/celebrity-detail', { celebrity: theCelebrity }))
    .catch(error => console.log(error))
})


// Celebrity add - Get
router.get('/new', (req, res, next) => res.render('celebrities/new'))
// Celebrity add - Post
router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })

  newCelebrity.save()
    .then(theCelebrity => {
      console.log(`Una nueva celebridad fue añadida ${newCelebrity}`)
      res.redirect('celebrities')
    })
    .catch(error => {
      res.redirect('/celebrities/new')
      console.log(error)
    })
})


// Celebrity Delete
router.post('/list/:celebrity_id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celebrity_id)
    .then(theCelebrity => res.redirect('/celebrities'))
    .catch(error => console.log(error))
})


// Celebrity Edit - Get
router.get('/list/:celebrity_id/edit', (req, res, next) => {
  Celebrity.findById(req.params.celebrity_id)
    .then(theCelebrity => res.render('celebrities/celebrity-edit', { celebrity: theCelebrity }))
    .catch(error => console.log(error))
})
// Celebrity Edit - Post
router.post('/list/:celebrity_id', (req, res, next) => {
  console.log(req.params.celebrity_id, '-----------------------------------')
  const { name, occupation, catchPhrase } = req.body
  Celebrity.update({ _id: req.params.celebrity_id }, { $set: { name, occupation, catchPhrase } })
    .then(theCelebrity => {
      console.log("-----------------------------------Celebridad editada")
      res.redirect('/celebrities')
    })
    .catch(error => console.log(error))
})





module.exports = router

