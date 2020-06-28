const express = require('express')
const router = express.Router()




//Require Model
const Celebrity = require('./../models/Celebrity.model')

//Endpoint Celebrities: View all collection
router.get('/', (req, res) => {
    // res.send('Here the celebrities colecction')

    Celebrity.find().sort({
            _id: -1
        })
        .then(allCelebritys => {
            res.render('celebrities/index', {
                allCelebritys
            })
        })
        .catch(err => console.log("Error traer listado theCelebrity list", err))
})


//Endpoint Show the Celebrity Detail
router.get('/detail/:id', (req, res) => {
    //res.send('hola soy el listado')

    Celebrity.findById(req.params.id)
        .then(theCelebrity => {
            console.log(theCelebrity)
            res.render('celebrities/show', theCelebrity)
        })
        .catch(err => console.log('Error en Id celebrity detail', err))
})


//Endpoint Create new Celebritie
router.get('/new', (req, res) => {
    res.render('celebrities/new')
})


router.post('/new', (req, res) => {
    // Los datos de las peticiones de tipo POST se almacenan en req.body
    // res.send(`Eviarías a la BBDD ${req.body.name} / ${req.body.ocupation} y ${req.body.catchPharse}`)
    const {
        name,
        ocupation,
        catchPharse
    } = req.body

    Celebrity
        .create({
            name,
            ocupation,
            catchPharse
        })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log("Error en la BBDD", err))
})


//Endpoint delete celebritie
router.post('/:id/delete', (req, res) => {
    //  res.send('eleminado')
    Celebrity.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error en Id celebrity detail', err))
})

//Endpoint edit celebrity


router.get('/edit/:id', (req, res) => {
    // res.send('editando')
    Celebrity.findById(req.params.id)
        .then(theCelebrity => {
            res.render('celebrities/edit', theCelebrity)
        })
        .catch(err => console.log('Error en Id celebrity edit', err))
})


router.post('/edit/:celebrityId', (req, res) => {
    const {
        name,
        ocupation,
        catchPharse
    } = req.body

    Celebrity
        .findByIdAndUpdate(req.params.celebrityId, {
            name,
            ocupation,
            catchPharse
        }, {
            new: true
        })
        .then(() => res.redirect(`/celebrities/detail/${req.params.celebrityId}`))
        .catch(err => console.log("Error en la BBDD", err))
})






// //Endpoint delete celebritie
// router.post('/:id/delete', (req, res) => {
//     //  res.send('eleminado')
//     Celebrity.findByIdAndDelete(req.params.id)
//         .then(theCelebrity => {
//             console.log(theCelebrity)
//             res.render('/celebrities', theCelebrity)
//         })
//         .catch(err => console.log('Error en Id celebrity detail', err))
// })





module.exports = router