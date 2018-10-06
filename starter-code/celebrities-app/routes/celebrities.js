const express = require("express");
const router = express.Router(); //crear ruoter de express

const Celeb = require("../models/Celebrity"); //Llamar al modelo

/*GET home page  celebrities*/
router.get('/',(req,res,next)=>{
  Celeb.find() //método de búsqueda para recuperar todas las celebridades.
    .then(celebrities => {
      res.render('celebrities/index',{celebrities})
    }).catch(e=>next(e))
})

//Mostrar formulario para agregar una celebridad 
router.get("/celebrities/add", (req, res) => {
  res.render("celebrities/new", { header: "Add new celebrity" });
});

router.post("/celebrities/add", (req, res) => {
  Celeb.create(req.body)
  .then(() => {
    res.redirect("/");
  })
  .catch(error => {
    console.log("======>", error);
    res.redirect("celebrities/new");
  });
});

//Borrar celebridad
router.post("/celebrities/:id/delete", (req,res)=>{
  Celeb.findByIdAndRemove(req.params.id)
  .then(celebrities => {
    res.redirect("/")
  })
  .catch(e=>next(e))
})

//Editar celibridad
router.get("/celebrities/:id/edit", (req,res)=>{
  Celeb.findById(req.params.id)
  .then(celebrities =>{
    res.render("celebrities/edit", {celebrities})
  })
  .catch(e=>next(e))
})

router.post("/celebrities/:id/edit", (req,res)=>{
  Celeb.findByIdAndUpdate(req.params.id, { $set: req.body })
  .then(celebrities =>{
    res.redirect("/celebrities/${celebrities._id}")
  })
  .catch(e=>next(e))
})


//Detalle de las celebridades 
router.get('/celebrities/:id', (req, res)=>{
  Celeb.findById(req.params.id)
  .then(celebrities => {
    res.render("celebrities/show", { header: celebrities.name, celebrities})
  })
  .catch(e=>next(e))
})

module.exports = router;
