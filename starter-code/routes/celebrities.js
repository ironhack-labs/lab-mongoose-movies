const { Router } = require('express')
const router = Router()
const {
    getCelebs,
    celebDetails,
    newCelebView,
    createCeleb,
    deleteCeleb,
    editCelebView,
    updateCeleb
} = require('../controllers/celebs.controllers')

router
    .get('/', getCelebs)
    .get('/new', newCelebView) // no entiendo muy bien por qué la ruta del /:id debe ir primero para que deje de dar CastError: Cast to ObjectId failed for value “new” at path “_id” for model “Celebreties”
    .get('/:id', celebDetails)
    .get('/:id/edit', editCelebView)
    .post('/', createCeleb)
    .post('/:id/delete', deleteCeleb)
    .post('/:id', updateCeleb)

module.exports = router;