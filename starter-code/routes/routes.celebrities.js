const express = require('express')
const router = express.Router()

const Celebrity = require('../model/celebritymodel')


// Lista de famosos
router.get('../views/celebrities/..', (req, res, next) => {
  Celebrity.find({})
    .then(allTheCelebrities => res.render('', { celebrities: allTheCelebrities }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})



module.exports = router;