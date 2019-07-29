
// 6 requerimo al paquete express
const express = require('express')

// 7 para darle una ruta creamos una variable que se llama route para pasarle el motodo Router del
// paquete express
const router = express.Router()


// le pasamos la ruta al modelo Celebritys
const Celebrity = require('../models/Celebrity.model')

// 8 a la variable router, le aplicamos el metodo GET le pasamos la como primer parametro la ruta
// de la lista y de segundo parametro el metodo fin y dos promesas para dibujar la pagina hbs llamada
// celebrity-list
router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find({})
    .then(allCelebritys => res.render('index', { cels: allCelebritys }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findId({celsId})


                                  //PONER EL NOMBRE DEL HBS QUE CORRESPONDA
    .then(CelebritysId => res.render('celebrity-list', { cels: CelebritysId }))
    .catch(err => console.log('Hubo un error:', err))
})


module.exports = router