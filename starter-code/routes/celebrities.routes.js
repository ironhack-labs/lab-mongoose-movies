const express = require('express')
const router = express.Router()

const celebrity = require('../models/celebrity')

//Página de inicio de celebrities
//router.get('/', (req, res, next) => res.render('celebrities/index'))

// Listado de celebrities
router.get('/', (req, res, next) => {                                                           // ESTO ES EL CONTROLADOR                                                                                                  
  celebrity.find()                                                                              // ESTO ES EL MODELO
    .then(allCelebrities => {                                                                    // ESTO ES LA VISTA
      res.render('celebrities/index', { celebrities: allCelebrities })
    })   
    .catch(error => console.log(error))
})

//Nueva celebrity ****** Por algún motivo esta linea peta si la pongo después del "Detalle de celebrity" (¿?)
router.get('/new', (req, res) => res.render('celebrities/new', req))
router.post('/new', (req, res) => {
  console.log("********************************** Llega aquí ********************************")
  const { name, occupation, catchPhrase } = req.body
  if (!name || !occupation || !catchPhrase){
    res.render("celebrities/new", {errMsg: "Faltan campos"})
    return
  }
  celebrity.findOne({name})
  .then(foundCeleb =>{
      if (foundCeleb) {
          res.render("celebrities/new", {errMsg: "La celebrity ya existe"})
          return
      }
      const newCelebrity = new celebrity({ name, occupation, catchPhrase })
      newCelebrity.save()
        .then(theCelebrity => res.redirect('/celebrities'))
        .catch(error => console.log(error))
  })
  .catch(err => console.log("**** Error en celebrity.findOne", err))
})

//Detalle de celebrity
router.get("/:id", (req, res) => {
  //console.log("************ El id es:", req.params.id)
  celebrity.findById(req.params.id)
  .then(thisCeleb => { 
    //console.log("************ INFO DE CELEBRITY:", thisCeleb)
    res.render('celebrities/show', { celebrity: thisCeleb })
  })
  .catch(error => console.log(error))
})

module.exports = router