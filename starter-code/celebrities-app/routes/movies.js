const express = require("express");
const router = express.Router(); //crear ruoter de express

const Movies = require("../models/Movie"); //Llamar al modelo

//GET home page  Movies
router.get('/m',(req,res,next)=>{
  Movies.find() //método de búsqueda para recuperar todas las celebridades.
    .then(pelis => {
      res.render('mov/index',{pelis})
    }).catch(e=>next(e))
})

//Mostrar formulario para agregar una celebridad 
router.get("/m/add", (req, res) => {
  res.render("mov/new", { header: "Add new movie" });
});

router.post("/m/add", (req, res) => {
  Movies.create(req.body)
  .then(() => {
    res.redirect("/m");
  })
  .catch(error => {
    console.log("======>", error);
    res.redirect("m/new");
  });
});

//Borrar Movies
router.post("/m/:id/delete", (req,res)=>{
  Movies.findByIdAndRemove(req.params.id)
  .then(pelis => {
    res.redirect("/m")
  })
  .catch(e=>next(e))
})

//Editar celibridad
router.get("/m/:id/edit", (req,res)=>{
  Movies.findById(req.params.id)
  .then(pelis =>{
    res.render("mov/edit", {pelis})
  })
  .catch(e=>next(e))
})

router.post("/m/:id/edit", (req,res)=>{
  Movies.findByIdAndUpdate(req.params.id, { $set: req.body })
  .then((pelis)=>{
    res.redirect("/m")
  })
  .catch(e=>next(e))
})

//Detalle de las Movies 
router.get("/m/:id", (req,res)=>{
  Movies.findById(req.params.id)
  .then(pelis => {
    res.render('mov/show', {header: pelis.title, pelis})
  })
  .catch(error => {
    console.log("======>", error);
  });
})

module.exports = router;
