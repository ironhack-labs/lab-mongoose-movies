const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router = express.Router()




//RUTA PARA OBTENER EL NOMBRE DE ARTISTIAS

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(cele => {
            console.log(cele)
            res.render('celebrities/index', { cele })
        }).catch(error => { next(error) })
})



//Ruta para añadir nuevas celebridades
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
    console.log(req.body)
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({
            name,
            occupation,
            catchPhrase
        }).then((actorCreated) => {
            console.log(actorCreated)
            res.redirect('/celebrities')
        })
        .catch(error => {
            console.log(error)
            res.render('celebrities/new')
        })
});
// RUTA PARA BORRAR
router.post("/celebrities/delete/:id", (req, res, next) => {
    const id = req.params.id

    Celebrity.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/celebrities")
        })
        .catch((error) => {
            next(error)
        })
})

//RUTA PARA EDITAR

router.get('/celebrities/edit/:id', (req, res, next) => {
    const { id } = req.params
    Celebrity.findById(id)
        .then((toFind) => {
            res.render('celebrities/edit', {
                celebrities: toFind
            })
        })
        .catch(error => next(error))
})



router.post("/celebrities/edit/:id", (req, res, next) => {
    const { id } = req.params

    const { name, occupation, catchPhrase } = req.body
    Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { new: true })
        .then((updated) => {
            console.log(updated)
            res.redirect('/celebrities')
        }).catch((error) => {
            next(error)
        })

})

//RUTA PARA OBTENER INFORMACIÓN COMPLETA DEL ARTISTA
router.get('/celebrities/detail/:id', (req, res, next) => {
    console.log(req.params)
    const id = req.params.id
    Celebrity.findById(id)
        .then((found) => {
            console.log(found)
            res.render('celebrities/show', { found })
        }).catch((error) => { console.log(error) })
})


module.exports = router