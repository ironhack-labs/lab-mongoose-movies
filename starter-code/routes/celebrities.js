const express = require("express");
const Router = express.Router();
const Celebrity = require('../models/Celebrity')

// Listado de celebrities
Router.get("/", (req, res, next) => {
    Celebrity.find()
        .then(celebrity => res.render("celebrities", { celebrity }))
        .catch(err => next(err))
})

// Randerizar formulario nueva celebrity
Router.get('/new', (req, res) => res.render("celebrities/new"))

// Detalle de cada celebrity
Router.get("/:id", (req, res, next) => {
    console.log(req.params.id)
    Celebrity.findById(req.params.id)
        .then(celebrity => res.render("celebrities/show", { celebrity }))
        .catch(err => next(err))
})

// Añadir una nueva celebrity
Router.post("/new", (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body
    const celebrity = new Celebrity({ name, occupation, catchPhrase })

    celebrity.save() //comando de mongoose para guardar en ddtt
        .then(celebrity => res.redirect("/celebrities"))
        .catch(err => next(err))
})

//Borrar una celebrity
Router.post("/:id/delete", (req, res, next) => {

    Celebrity.findByIdAndRemove(req.params.id) //comando de mongoose para borrar de la ddtt por el id
        .then(celebrity => res.redirect("/celebrities"))
        .catch(err => next(err))
})



//Editar una celebrity
Router.get("/:id/edit", (req, res, next) => {

    Celebrity.findOne({ _id: req.params.id }) //comando de mongoose para borrar de la ddtt por el id
        .then(celebrity => {
            console.log(celebrity)

            res.render("celebrities/edit", { celebrity })
        })
        .catch(err => next(err))
})

//actualizar la celebrity editada
Router.post("/:id/edit", (req, res, next) => {
    console.log(req.body)
    const { name, occupation, catchPhrase } = req.body

    Celebrity.update({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } }) //comando de mongoose para borrar de la ddtt por el id
        .then(celebrity => res.redirect("/celebrities"))
        .catch(err => next(err))
})



module.exports = Router;