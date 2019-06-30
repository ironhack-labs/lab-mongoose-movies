const express = require('express')
const router = express.Router()

// Requerimos el modelo Celebrity 
const Celebrity = require('../models/Celebrity')

//lista de celebrities
router.get('/', (req, res, next) => {   //cuidado con la ruta
  Celebrity.find()
    .then(allCelebritries => res.render('celebrities/index', { celebrities: allCelebritries }))
    .catch(error => console.log(error))
})

//Detalles de las celebrities
router.get('/list/:celebrity_id', (req, res, next) => {
  Celebrity.findById(req.params.celebrity_id)         //es show y no celebrity-detail
    .then(theCelebrity => res.render('celebrities/show', { celebrity: theCelebrity }))
    .catch(error => console.log(error))
})

//Añadiendo nuevas celebrities con GET
router.get('/new', (req, res, next) => res.render('celebrities/new')) //ojo con la dirección

//Añadiendo nuevas celebrities con POST
router.post('/', (req, res, next) => {    //ojo con la direccion
  const { name, occupation, catchPhrase } = req.body
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })

  newCelebrity.save()  //método save()
    .then(theCelebrity => {
      console.log(`Una nueva celebrity fue añadida ${newCelebrity}`)
      res.redirect('celebrities')
    })
    .catch(error => {
      res.redirect('/celebrities/new')
      console.log(error)
    })
})

//route para borrar celebrities con POST
router.post('/list/:celebrity_id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celebrity_id)
    .then(theCelebrity => res.redirect('/celebrities'))
    .catch(error => console.log(error))
})

//Editando celebrities con GET
router.get('/list/:celebrity_id/edit', (req, res, next) => {
  Celebrity.findById(req.params.celebrity_id)
    .then(theCelebrity => res.render('celebrities/edit', { celebrity: theCelebrity }))
    .catch(error => console.log(error))
})

//Editando celebrities con POST
router.post('/list/:celebrity_id', (req, res, next) => {
  console.log(req.params.celebrity_id, '-----------------------------------')
  const { name, occupation, catchPhrase } = req.body
  Celebrity.update({ _id: req.params.celebrity_id }, { $set: { name, occupation, catchPhrase } })
    .then(theCelebrity => {
      console.log("-----------------------------------Celebrity editada")
      res.redirect('/celebrities')
    })
    .catch(error => console.log(error))
})


module.exports = router