const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')



// Lista de celebrities
router.get('/', (req, res) => {
  Celebrity.find()
    .then(allCelebrities => {
      console.log(allCelebrities)
      res.render('celebrities/celebritiesList', {celebrities: allCelebrities})})
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

// detalles de celebrities

router.get('/details/:id', (req, res) => {
  const celebrityId = req.params.id
  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/celebrityDetails', {
      celebrity: theCelebrity
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

// Nueva celebritie: renderizar formulario
router.get('/add', (req, res) => res.render('celebrities/newCelebrity'))

// Nueva celebritie: enviar formulario
router.post('/add', (req, res) => {

  const { name, occupation, catchPhrase} = req.body

  Celebrity.create({ name, occupation, catchPhrase})
    .then(x => res.redirect('/celebrities'))
    .catch(err => 'error: ' + err)
})

// Editar celebrity: renderizar formulario
router.get('/edit', (req, res) => {
  const celebrityId = req.query.celebrityId
  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/editCelebrity', theCelebrity)) //falta hacer el HBS
    .catch(err => console.log('error al encontrar la celebrity', err))
})


// Editar celebrity: enviar formulario
router.post('/edit', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  const celebrityId = req.query.celebrityId


  Celebrity.findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('error al actualizar', err))

})

//eliminar celebrity
router.get ('/delete', (req,res)=> {
  const celebrityId = req.query.celebrityId
  Celebrity.findByIdAndRemove(celebrityId)
  .then(res.redirect('/celebrities'))
  .catch(err => console.log('error consiltando la BBDD ', err)) 
  
})




module.exports = router