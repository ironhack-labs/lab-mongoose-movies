const express = require('express')
const router = express.Router()

const celebrities = require("../models/celebrity.model")

//Listado de celebrities
router.get("/", (req, res) => {
  celebrities.find()
    .then(allCelebrities => res.render("celebrities/index", {
      celebrity: allCelebrities
    }))
    .catch(err => console.log("Error en find celebrities", err))
})
//Detalle de celebrities

router.get("/:id", (req, res) => {


  celebrities.findById(req.params.id)
    .then(cel => res.render('celebrities/show', cel))
    .catch(err => console.log("Hubo un error a la hora de encontrar por ID", err))
}
)

// Creación de celebrities


router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {

  const { name, occupation, catchPhrase } = req.body

  celebrities.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("Error al crear un celebrity", err))
})

module.exports = router