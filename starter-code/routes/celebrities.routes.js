const express = require('express')
const router = express.Router()
const Celebrity = require('./../models/celebrity')

// Endpoints
router.get('/list', (req, res) => {
  Celebrity.find()
   .then(allCelebrities => res.render('./celebrities/celebList',{allCelebrities}))
   .catch(err => console.log('Error en la lista de celebridades ',err))

})
router.get('/details/:id', (req, res) => {
  Celebrity.findById(req.params.id)
   .then(theStar => res.render('./celebrities/show',theStar))
   .catch(err => console.log('Error en los detalles de celebridades ',err))

})
router.get('/new', (req, res) => {
  res.render('./celebrities/new')
})

router.post('/create',(req,res) => {
  const {name,occupation,catchPhrase} = req.body
  Celebrity
  .create({name,occupation,catchPhrase})
  .then(() => res.redirect('/celebrities/list'))
  .catch(err => console.log('Error al crear una Celebrity ',err))

})

module.exports = router
