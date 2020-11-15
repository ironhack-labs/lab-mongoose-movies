const express = require('express')
const router = express.Router()
const Celebrity = require("./../models/celebrity.model")

// Listado celebrities
router.get('/', (req, res) => {
  //res.render('celebrities')
  Celebrity
    .find()
    .then(allCelebrities => res.render("celebrities/celebrities-pages",{allCelebrities}))
  .catch(err=>console.log(err))
})

// Details
router.get('/details/:celebrities_id', (req, res) => {
  //res.send('dime los id + req.params.celebrities_id')
const CelebrityId = req.params.celebrities_id

  Celebrity
    .findById(CelebrityId)
    .then(oneCelebrity => res.render("celebrities/details", oneCelebrity))
  .catch(err=>console.log(err))
})

// Formulario nuevo celebrity: renderizar (GET)
router.get('/crear-celebrity', (req, res) => {

  //res.send("vbnvbnm")

    res.render("celebrities/celebrities-create")
  
})
// Formulario nuevo celebrity: gestionar (POST)
router.post('/crear-celebrity', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
})

// Eliminar celebrity
router.post('/:_id/delete', (req, res) => {

  const CelebrityId = req.params._id

    Celebrity
        .findByIdAndDelete(CelebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})

// Formulario edición celebrity: gestionar (GET)
router.get('/:_id/edit', (req, res) => {

    const CelebrityId = req.params._id                            

    Celebrity
        .findById(CelebrityId)
        .then(celebrityInfo => res.render('celebrities/celebrities-edit', celebrityInfo))
        .catch(err => console.log(err))
})

router.post('/:_id/edit', (req, res) => {

  const CelebrityId = req.query._id

  const { name, occupation, catchPhrase  } = req.body

    Celebrity
        .update(CelebrityId,{ name, occupation, catchPhrase  })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})




module.exports = router

