const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')



router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => {
            res.render('celebrities', { celebrity: allCelebrities })
        })  // ESTO ES LA VISTA
        .catch(error => console.log(error))
})

router.get('/view/:celebrity_id', (req, res) => {

    const id = req.params.celebrity_id
    Celebrity.findById(id)
        .then(celebrity => res.render('celebrities-details', { famouse: celebrity }))
        .catch(error => console.log(error))
})
// Add celebrities
router.get('/new', (req, res) => res.render('add-celebrity'))

router.post('/new', (req, res) => {
    const { name, occupation, cathQuotes } = req.body

    if (!name || !occupation || !cathQuotes) {
        res.render("add-celebrity", { errMsg: "Todos los campos son obligatorios" })
        return
    }

    Celebrity.findOne({ name })
        .then(foundName => {
            if (foundName) {
                res.render("add-celebrity", { errMsg: "Ya existe este famoso" })
                return
            }
            Celebrity.create({ name, occupation, cathQuotes })
                .then(createFamouse => {
                    console.log(createFamouse)
                    res.redirect('/celebrities')
                })
                .catch(err => console.log("Fallo al intentar crear nuevo famoso", err))
        })
        .catch(err => console.log("BOOM", err))
})
// Delete celebrities

router.post('/:celebrity_id/delete', (req, res, next) => {
    const id = req.params.celebrity_id
    Celebrity.findById(id).remove()
        .then(removed => {
            console.log('Actor borrado', removed)
            res.redirect('/celebrities')
        })
        .catch(err => console.log("Fallo en borrar celebrities", err))
})

//Edit celebrities

router.get('/edit/:celebrity_id', (req, res, next) => {

    const id = req.params.celebrity_id

    Celebrity.findById(id)
        .then(celebrity => res.render('edit-celebrity', { famouse: celebrity }))
        .catch(error => console.log(error))

})


router.post('/:celebrity_id', (req, res, next) => {
    const { name, occupation, cathQuotes } = req.body
    const id = req.params.celebrity_id
    Celebrity.findById(id).update({ name, occupation, cathQuotes })
        .then(update => {
            console.log('Actor actualizado', update)
            res.redirect('/celebrities')
        })
        .catch(err => console.log('No se actualizo actor', err))

})



module.exports = router