const express = require('express')
const router = express.Router()
const Celebrity = require('./../models/celebrity')

// Endpoints

//Lista de Celebrities
router.get('/list', (req, res) => {
  Celebrity.find()
   .then(allCelebrities => res.render('./celebrities/celebList',{allCelebrities}))
   .catch(err => console.log('Error en la lista de celebridades ',err))

})

//Ver detalles de Celebrity
router.get('/details/:id', (req, res) => {
  Celebrity.findById(req.params.id)
   .then(theStar => res.render('./celebrities/show',theStar))
   .catch(err => console.log('Error en los detalles de celebridades ',err))

})
//Crear nueva Celebrity
router.get('/new', (req, res) => {
  res.render('./celebrities/new')
})

router.post('/new',(req,res) => {
  const {name,occupation,catchPhrase} = req.body
  Celebrity
  .create({name,occupation,catchPhrase})
  .then(() => res.redirect('list'))
  .catch(err => console.log('Error al crear una Celebrity ',err))

})
//Borrar una Celebrity
router.post('/:id/delete',(req,res) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/celebrities/list'))
  .catch(err => console.log('Error al borrar una Celebrity ',err))

})
//Editar una Celebrity
router.get('/edit/:idCeleb',(req,res) => {
  Celebrity.findById(req.params.idCeleb)
  .then(theStar => res.render('celebrities/edit',theStar))
  .catch(err => console.log('Error al encontrar la celebrity ',err))
})

router.post('/edit/:idCeleb',(req,res) => {

  const {name,occupation,catchPhrase} = req.body

  Celebrity.findByIdAndUpdate(req.params.idCeleb,{name,occupation,catchPhrase},{new:true})
  .then(() => res.redirect(`/celebrities/details/${req.params.idCeleb}`))
  .catch(err => console.log('Error al editar una Celebrity ',err))
})

module.exports = router
