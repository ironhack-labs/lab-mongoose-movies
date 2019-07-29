const express = require('express')
const router = express.Router()

const Celebrity = require('../models/Celebrity.model')

//Listado de celebrities
router.get('/',(req,res,next)=>{
  Celebrity.find({})
  .then(allTheCelebrities=>res.render('celebrities/index',{celebrities: allTheCelebrities}))
  .catch(function(err){
    next()
    console.log('Hubo un error',err)
  })
})

//Detalle de celebrity
router.get('/show/:id', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findById(celebrityId)
    .then(theWholeCelebrity => res.render('celebrities/show', { celebrity: theWholeCelebrity }))
    .catch(function(err){
      next()
      console.log('Hubo un error:', err)
    })
})

// Creación de nueva celebrity
router.get('/add', (req, res, next) => res.render('celebrities/new'))
router.post('/add', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/'))
    .catch(function(err){
      next()
      console.log('Hubo un error:', err)
    })
  })

  
  // Edición de libro
router.post('/delete/:id', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(function(err){
      next()
      console.log('Hubo un error:', err)
    })
})

module.exports = router