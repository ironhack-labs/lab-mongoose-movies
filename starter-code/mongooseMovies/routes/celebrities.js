//¿hay que incluir estas tres llamadas en todos los archivos de rutas? no lo tengo claro pero lo he sacado del pair del mismo día
const express = require('express');
const router  = express.Router(); //¿cuándo usamos app y cuándo router?
const Celebrities = require('../models/Celebrity.js')

router.get('/celebrities', (req, res, next) => { //este celebrities se refiere al archivo .js, no?
  Celebrity.find(err,celebrities) //No tengo claro si tenía que hacer el find a celebrity o celebrities, no tengo claro que haya que llamar al modelo. Tampoco en los parámetros que se le pasan
   .then(celebrities =>{
      res.render('celebrities', {celebrities}) //y este celebrities se refiere a la URL que se creará, no? no debería dar 404 cuando hago click en el enlace creado, sino llevar a página en blanco hasta que meta contenido, no?
    })
   .catch(err =>{
      next();
      return (err);
    })
  })

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findOne(err,celebrities)
    .then(celebrities => {
      res.render(req.query)
    })
    .cath(err => {
      res.render('celebrities/show')
    })
})