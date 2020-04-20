const express = require("express")
const router = express.Router()
const Celebrity = require("../models/celebrity-model")

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCelebs => res.render('celebrities/celebrities', {
      allCelebs
    }))
    .catch(err => console.log("An error ocurred", err))
})

router.get('/details/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(selectedCeleb => res.render('celebrities/details', {
      selectedCeleb
    }))
    .catch(err => console.log("An error ocurred", err))
})


router.get('/create', (req, res, next) => res.render('celebrities/new'))
router.post('/create', (req, res, next) => {
  const {
    name,
    ocupation,
    catchPhrase
  } = req.body
  Celebrity.create({
      name,
      ocupation,
      catchPhrase
    })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("An error ocurred", err))
})


router.post('/details/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => res.send("An error ocurred", err))
})

router.get('/details/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(editCeleb => res.render('celebrities/edit', {
      editCeleb
    }))
    .catch(err => console.log("An error ocurred", err))

})
router.post('/details/:id/edit', (req, res, next) => {
  const {
    name,
    ocupation,
    catchPhrase
  } = req.body

  Celebrity.findByIdAndUpdate(req.params.id, {
      name,
      ocupation,
      catchPhrase
    }, {
      new: true
    })
    .then(res.redirect(`/celebrities`))
    .catch(err => console.log("An error ocurred", err))

})

module.exports = router