const express = require('express')
const router = express.Router()

const celebrity = require('../models/celebrity')

//Página de inicio de celebrities
//router.get('/', (req, res, next) => res.render('celebrities/index'))

// Listado de celebrities
router.get('/', (req, res, next) => {                                                           // ESTO ES EL CONTROLADOR                                                                                                  
  celebrity.find()                                                                              // ESTO ES EL MODELO
    .then(allCelebrities => {                                                                   // ESTO ES LA VISTA
      res.render('celebrities/index', { celebrities: allCelebrities })
    })   
    .catch(error => console.log(error))
})






module.exports = router