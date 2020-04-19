const express = require("express")
const router = express.Router()

const Celebrity = require("../models/celebrity")

// GET Home Page
router.get('/', (req, res, next) => {

  Celebrity.find()
    .then(allCelebrities => {
      console.log(allCelebrities)
      console.log(allCelebrities.length)
      res.render('celebrities/index', {allCelebrities})
    })
    .catch(error => {
      next()
      return error
    })
})

// GET Create Celebrity
router.get('/new', (req, res, next) => res.render('celebrities/new'))

// POST Create Celebrity
router.post('/new', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body
  Celebrity.create({name, occupation, catchPhrase})
    .then(createdCelebrity => res.redirect('/celebrities'))
    .catch(error => res.redirect('celebrities/new'))
})

// POST Delete Celebrity
router.post('/:id/delete', (req, res, next) => {

  Celebrity.findByIdAndRemove(req.params.id)
    .then(res.redirect('/celebrities'))
    .catch(error => {
      next()
      return error
    })
})


// GET Edit Celebrity
router.get('/:id/edit', (req, res, next) => {
  
  Celebrity.findById(req.params.id)
    .then(foundCelebrity => res.render('celebrities/edit', foundCelebrity))
    .catch(error => {
      next()
      return error
    })
})

// POST Edit Celebrity
router.post('/:id/edit', (req, res, next) => {
  
  const { name, occupation, catchPhrase } = req.body
  Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase}, {new: true})
    .then(res.redirect('/celebrities'))
    .catch(error => {
      next()
      return error
    })

})

// GET Celebrity Details
router.get('/:id', (req, res, next) => {
  
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/show', celebrity))
  .catch(error => console.log("There has been an error at getting ID: ", error))
})




module.exports = router