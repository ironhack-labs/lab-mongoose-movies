const express = require('express')
const router  = express.Router()
const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res, next) => {
    
    Celebrity.find()
    .then(allcelebrities => res.render('celebrities/celebrities-name',{celebrity: allcelebrities}))
    .catch(err => console.log("Error consultando los famosos en la BBDD: ", err))
  })

module.exports = router