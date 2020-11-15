const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity')



//Listado Celebrities

router.get('/', (req, res) => {

   Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/celebrities-list', { allCelebrities }))   
        .catch(err => console.log(err))
})



 //Detalle Celebrities

router.get('/show/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log(err))
})



//Añadir Celebrity: Formulario (GET)

router.get('/new', (req, res) => res.render('celebrities/new'))

//Añdir Clebrity: Formulario (POST)

router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
})



// Eliminar Celebrity

router.get('/Eliminar-celebrities', (req, res) => {

    const celebrityId = req.query.celebrity_id

   Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})



// Editar Celebrity: Renderizar (GET)
router.get('/Editar-celebrities', (req, res) => {

    const celebrityId = req.query.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(celebrityInfo => res.render('celebrities/edit', celebrityInfo))
        .catch(err => console.log(err))
})

// Editar Celebrity: Gestionar (POST)

router.post('/Editar-celebrities', (req, res) => {

    const celebrityId = req.query.celebrity_id                            

    const { name, occupation, catchPhrase } = req.body    

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(celebrityInfo => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})

module.exports = router


 