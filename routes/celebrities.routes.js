const express = require('express')
const router = express.Router()
const Celebrity = require('./../models/celebrity.model')

//Lista de celebridades
router.get('/', (req, res) => {
   Celebrity
        .find()                
        .then(allcelebrities => 
           res.render('celebrity/celebrity-list', { allcelebrities })
         
        )   
        .catch(err => console.log(err))
})

router.get('/detail/:celebrity_id', (req, res) => {
    const celebrityId = req.params.celebrity_id;

//Detalles
    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => res.render('celebrity/details', theCelebrity))
        .catch(err => console.log(err))
})

//Añadir nuevas celebridades
router.get('/new', (req, res) => res.render('celebrity/newCelebrity'))
router.post('/new', (req, res) => {
    const { name, ocupation, catchPhrase } = req.body
    

    Celebrity
       .create({ name, ocupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))

})
//borrar
router.get('/delete/:celebrity_id/', (req, res) => {

    const celebrityId = req.params.celebrity_id
    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})


//Editar

router.get('/edit/:celebrity_id/', (req, res) => {
const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(celebrityInfo => res.render('celebrity/editCelebrity', celebrityInfo))
        .catch(err => console.log(err))
})


router.post('/edit-celebrity', (req, res) => {


    const celebrityId = req.query.celebrity_id
    const { name, ocupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, ocupation, catchPhrase })
        .then(celebrityInfo => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})




module.exports = router