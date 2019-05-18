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

router.get("/:id", (req, res) => {
  console.log("************ El id es:", req.params.id)
  celebrity.findById(req.params.id)
    .then(thisCeleb => { 
      console.log("************ INFO DE CELEBRITY:", thisCeleb)
      res.render('celebrities/show', { celebrity: thisCeleb })
    })
    .catch(error => console.log(error))
})


router.get('/view/:book_id', (req, res) => {

})
module.exports = router