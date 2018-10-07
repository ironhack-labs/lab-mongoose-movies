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

router.get('/new', (req,res) =>{
  res.render("new")
})

router.post("/new",(request, response)=>{
  Celebrity.create(request.body) //Trae la info del formulario
   .then(celebritytables=>{
    response.redirect("/celebrities")
  })
})

//RUTA BORRAR REGISTROS
router.get('/celebrities/:id/delete', (req, res) => {
  Celebrity.findByIdAndDelete(req.params.id)
  .then(celebritytables => {
    res.render("delete", { //Vista delete.hbs
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
