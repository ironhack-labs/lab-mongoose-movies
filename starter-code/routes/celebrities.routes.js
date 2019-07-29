const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')

//RUTA PARA MOSTARR LISTA NOMBRES CELEBRITIES
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(allTheCelebrities => res.render('celebrities/index', {celebrities: allTheCelebrities}))  //Pasamos el objeto celebrities creado en seeds.js
    .catch(err => console.log('Hubo un error:', err))
})

//RUTA PARA MOSTRAR LOS DETALLES DE CADA CELEBRITY
router.get('/celebrities/:id', (req, res, next) => {
    const celebrityId = req.params.id
    Celebrity.findById(celebrityId)
      .then(moreDetails => res.render('celebrities/show', { celebrity: moreDetails }))
      .catch(err => console.log('Hubo un error:', err))
})

//RUTA PARA CREAR UNA NUEVA CELEBRITY
router.get('/create', (req, res, next) => res.render('celebrities/new'))
router.post('/create', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
      .then(() => res.redirect('/celebrities'))
      .catch(err => console.log('Hubo un error:', err))
})

// DELETE CELEBRITIES
router.post('/delete/:id', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findByIdAndRemove(celebrityId)
    .then(theDelete => res.render('celebrities/show', { celebrity: theDelete }))
    .catch(err => console.log('Hubo un error:', err))
})



module.exports = router;
