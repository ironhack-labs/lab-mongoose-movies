const express = require('express');
const router = express.Router();

const Celebrity = require("../models/celebrity.model");


router.get("/", (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render("celebrities", {
                celebrities
            });
        })
        .catch(err => console.log("hay un error en el listado de celebrities", err))
});

//Formulario de crear una nueva celebridad
router.get('/new', (req, res) => res.render('celebrities/new'))

//Sacar con la id el detalle de una celebridad
router.get('/:id', (req, res, next) => {

    const celebrityId = req.params.id

    Celebrity.findById(celebrityId)
        .then(celebrity => {
            res.render('celebrities/show', {
                celebrity
            })
        })
        .catch(err => {
            console.log("Error consultando el celebrity en la BBDD: ", err)
            next(err)
        })
});

//Crear nueva celebridad
router.post('/', (req, res) => {

    const {
        name,
        occupation,
        catchPhrase,
    } = req.body

    Celebrity.create({
            name,
            occupation,
            catchPhrase,
        })
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            console.log("Hubo un fallo añadiendo newCelebrity", err)
        })
    res.redirect("/celebrities")
});

router.post("/:id/delete", (req, res, next) => {

    const removeId = req.params.id

    Celebrity.findByIdAndRemove(removeId)
        .then(() => res.redirect("/celebrities"))
        .catch(err => {
            console.log("Hubo un error borrando el celebrity en la BBDD: ", err)
            next(err)
        })
})


module.exports = router;