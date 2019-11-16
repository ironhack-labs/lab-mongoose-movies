const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')
//const Author = require('../models/author.model')



// Lista de famosos
router.get('/', (req, res) => {
  Celebrity.find()
    .then(allCelebrities => res.render('celebrities', {
      thecele: allCelebrities
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

//un famoso por su id
router.get('/details/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    //.populate('author')
    .then(theCelebrity => res.render('celebrity', {
      cell: theCelebrity
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

// Manda el formulario para agregar un famoso
router.get('/add', (req, res) => res.render('newCelebrity'))

// Agregar un famoso
router.post('/add', (req, res) => {

  const {
    name,
    occupation,
    catchPhrase
  } = req.body

  Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(x => res.redirect('/celebrities'))
    .catch(err => 'error: ' + err)
})

//mandar el formulario para editar un famoso
router.get('/edit', (req, res) => {
  const cellId = req.query.cellId
  Celebrity.findById(cellId)
    //.populate('autor')
    .then(theCelebrity => res.render('editCelebrity', theCelebrity))
    .catch(err => console.log('error!!', err))
})

// Editar un famoso
router.post('/edit', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body
  const cellId = req.query.cellId
  Celebrity.findByIdAndUpdate(cellId, {
      name,
      occupation,
      catchPhrase
    })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('error!!', err))

})

//eliminar un famoso por su id
router.get('/delete', (req, res) => {
  const cellId = req.query.cellId
  Celebrity.findByIdAndRemove(cellId)
    //.populate('author')
    .then(res.redirect('/celebrities'))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

module.exports = router;