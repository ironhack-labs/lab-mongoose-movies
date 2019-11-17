const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')

//callback de la ruta, devuelve TODAS las celebrities renderizadas
router.get('/', (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/index', {
            celebrities: allCelebrities,
            title: 'Celebrities'
        }))
        .catch(err => console.log("Error consultando la BBDD: ", err))
});

//callback de la ruta, manda formulario para añadir y devuelve todas las celebrities renderizadas NUEVAS
router.get('/new', (req, res) => res.render('celebrities/new'))

router.post('/add', (req, res) => {

    const {
        name,
        occupation,
        catchPhrase
    } = req.body


    let newCelebrity = new Celebrity({
        name,
        occupation,
        catchPhrase
    })

    newCelebrity.save()
        .then(x => {
            console.log('Tu celebrity ha sido creada')
            res.redirect('/celebrities')
        })
        .catch(err => {
            res.redirect('/celebrities/new')
        })
})

//callback de la ruta, BORRA la celebrity 
router.post('/:id/delete', (req, res, next) => {

    const {
        id,
    } = req.body

    Celebrity.findByIdAndRemove(id)
        .then(TheCelebrity => res.redirect('/celebrities'))

        .catch(err => {
            res.redirect('/celebrities')
            console.log("Error deleting celeb: ", err)
        })
})



//callback de la ruta, devuelve todas las celebrities renderizadas por un ID (es cualquier cosa después de /)
router.get('/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/show', {
            celebrity: theCelebrity
        }))
        .catch(err => console.log("Error consultando la BBDD: ", err))
});

module.exports = router
