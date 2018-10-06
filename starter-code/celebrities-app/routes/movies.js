const express = require("express");
const router = express.Router(); //crear ruoter de express

const Movies = require("../models/Movie"); //Llamar al modelo

//GET home page  Movies
router.get('/',(req,res,next)=>{
  Movies.find() //método de búsqueda para recuperar todas las celebridades.
    .then(pelis => {
      res.render('mov/index',{pelis})
    }).catch(e=>next(e))
})

//Borrar Movies
router.post("/Movies/:id/delete", (req,res)=>{
  Movies.findByIdAndRemove(req.params.id)
  .then(pelis => {
    res.redirect("/")
  })
  .catch(e=>next(e))
})

//Detalle de las Movies 
router.get("/Movies/:id", (req,res)=>{
  Movies.findById(req.params.id)
  .then(pelis => {
    res.render('mov/show', {header: pelis.title, pelis})
  })
  .catch(error => {
    console.log("======>", error);
  });
})

module.exports = router;
