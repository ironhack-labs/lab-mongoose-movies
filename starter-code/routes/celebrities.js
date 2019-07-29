const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')


// Listado de libros
router.get('/', (req, res, next) => {
  console.log('hola soy la ruta de celeb')
  Celebrity.find({})
    .then(allTheCelebrities => {
      console.log(allTheCelebrities)  
      res.render('celebrities', { celebrities: allTheCelebrities })
    })  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router