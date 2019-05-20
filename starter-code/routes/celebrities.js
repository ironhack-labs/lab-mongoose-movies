const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js')


/* GET celebs page */
router.get('/', (req, res, next) => { // ESTO ES EL CONTROLADOR
  Celebrity.find() // ESTO ES EL MODELO
    .then(allCelebs => res.render('celebrities', {
      celebrities: allCelebs
    })) // ESTO ES LA VISTA
    .catch(error => console.log(error))
})

// Add new celeb
router.get('/new', (req, res) => res.render('new'))
router.post('/new', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body
  const newCeleb = new Celebrity({
    name,
    occupation,
    catchPhrase
  })
  newCeleb.save()
    .then(theCeleb => res.redirect('/celebrities'))
    .catch(error => res.render('new'))
})
//GET celeb's detail
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(theCeleb => res.render('show', {
      celebrity: theCeleb
    }))
    .catch(error => console.log(error))
})







module.exports = router;