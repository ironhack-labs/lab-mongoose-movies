const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.models')

router.get('/list', (req, res, next) => {

  Celebrity.find()
    .then(allcelebrities => res.render('celebrities/celebrities-list', { celebrity: allcelebrities }))
    .catch(err => console.log("Error consultando los famosos en la BBDD: ", err))
})