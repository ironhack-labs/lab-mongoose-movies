const express = require('express')
const router  = express.Router()
const Celebrity = require('../models/celebrity.model')

//Nombres de los famosos
router.get('/list', (req, res, next) => {

    Celebrity.find()
    .then(allcelebrities => res.render('celebrities/celebrities-list',{celebrity: allcelebrities}))
    .catch(err => console.log("Error consultando los famosos en la BBDD: ", err))
  })

// Borrado de famosos
router.post('/:id/delete' , (req,res) => {
  
  const celebrityId = req.params.id

  Celebrity.findByIdAndDelete(celebrityId)
  .then(() => res.redirect('/celebrities/list'))
  .catch(err => console.log("Error borrando el famoso en la BBDD: ", err))

})

//Detalles personales de famosos
router.get('/details/:id',(req, res) => {

  const celebrityId = req.params.id
  
  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/celebrities-details', theCelebrity))
    .catch(err => console.log("Error consultando el famoso en la BBDD: ", err))
})

// Creación de famoso
router.get('/add', (req, res) => res.render('celebrities/celebrities-new'))
router.post('/add', (req, res) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase  })
    .then(() => res.redirect('/celebrities/list'))
    .catch(err => console.log(err))
})

// Editar famoso
router.get('/edit', (req, res) => {

  const celebrityId = req.query.id

  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/celebrities-edit', theCelebrity))
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {
  
  const celebrityId = req.params.id

  Celebrity.findByIdAndUpdate(celebrityId, req.body)
    .then(x => res.redirect(`/celebrities/details/${celebrityId}`))
    .catch(err => console.log(err))
})

module.exports = router