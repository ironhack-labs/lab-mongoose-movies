const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')




router.get('/', (req, res) => {
  Celebrity.find()
    .then(allTheCelebrities => res.render('celebrities/celebritiesList', { celebrities: allTheCelebrities }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

router.get('/details/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(theCelebrity => res.render('celebrities/celebritiesDetails', { celebrity: theCelebrity }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


// Renderizar formulario creacion

router.get('/new', (req, res) => res.render('celebrities/new'));

// Crear nuevo 
router.post('/new', (req, res) => {

  const { name, occupation, catchPhrase } = req.body

  if (!name || !occupation || !catchPhrase) {
    res.render('celebrities/new', { errorMessage: 'ERROR: Fill all the gaps' })
    return
  }
  Celebrity.findOne({ "name": name })
    .then(celeb => {
      if (celeb) {
        res.render("celebrities/new", { errorMessage: "ERROR: Celebrity already exists at DataBase" })
        return
      }
      Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect("/celebrities"))
        .catch(error => console.log(error))
    })
    .catch(error => { console.log(error) })
})

// Editar celebrity: renderizar formulario

router.get('/edit', (req, res) => {
  const celebrityId = req.query.celebrityId
  Celebrity.findById(celebrityId)
    .then(theCeleb => res.render('celebrities/editCelebrity', theCeleb))
    .catch(err => console.log('error!!', err))
})

// Editar celebrity: enviar formulario
router.post('/edit', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  const celebrityId = req.query.celebrityId
  Celebrity.findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('error!!', err))
})


// Borrar celebrity: renderizar formulario

router.get('/delete', (req, res) => {
  const celebrityId = req.query.celebrityId
  Celebrity.findById(celebrityId)
    .then(theCeleb => res.render('celebrities/deleteCelebrity', theCeleb))
    .catch(err => console.log('error!!', err))
})


// Borrar celebrity: enviar formulario
router.post('/delete', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  const celebrityId = req.query.celebrityId
  Celebrity.findByIdAndRemove(celebrityId, { name, occupation, catchPhrase })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('error!!', err))
})



module.exports = router;





