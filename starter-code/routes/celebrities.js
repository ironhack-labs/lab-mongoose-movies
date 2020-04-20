const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrityModel')

router.get('/', (req, res, next) => {

  console.log("----------------------------------------------------------------------------------hola 1")

  Celebrity.find()
           .then(allCelebrities => {res.render('celebrities/index', {allCelebrities}) 
          console.log(allCelebrities.length)})
           .catch(err => console.log(`Error al buscar y pintar la lista de celebrities ${err}`))
           

           console.log("----------------------------------------------------------------------------------hola 2")

})

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
    .catch(err => console.log(`Error  ${err}`))
})


// GET Edit Celebrity
router.get('/:id/edit', (req, res, next) => {

  Celebrity.findById(req.params.id)
    .then(foundCelebrity => res.render('celebrities/edit', foundCelebrity))
    .catch(err => console.log(`Error  ${err}`))
})

// POST Edit Celebrity
router.post('/:id/edit', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body
  Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase}, {new: true})
    .then(res.redirect('/celebrities'))
    .catch(err => console.log(`Error  ${err}`))

})

// GET Celebrity Details
router.get('/:id', (req, res, next) => {

  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/show', celebrity))
  .catch(err => console.log(`Error  ${err}`))
})




module.exports = router 



module.exports = router 