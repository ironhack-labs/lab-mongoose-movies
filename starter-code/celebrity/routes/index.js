const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//RUTA CELEBRITY
router.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then(celebritytables => {
      res.render('celebrities', {
        header: "Lista de Celebridades",
        celebritytables
      })
    })
})

//RUTA PARA MOSTRAR DETALLES DE LAS CELEBRIDADES
router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebritytables => {
      res.render("show", { //Vista show.hbs
        header: celebritytables.name,
        celebritytables
      })
    })
})

module.exports = router;
