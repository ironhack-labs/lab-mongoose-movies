const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");
/* Get the Celebrities */
router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities/", { celebrity });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

//ITERACION 3
router.get("/show/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //foundObjFromId
    const foundObject = await Celebrity.findById(id);
    console.log(foundObject)
return res.render("celebrities/show", { foundObject });
  }catch (err) {
  res.send(`error: ${err}`);
  next();
}
});
 
//ITERACION 4
router.get("/new", async (req, res, next) => {
  try {
    return res.render("celebrities/new");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

//CREACION DEL BOTON SUBMIT Y EL PROCESO DEL FORMULARIO
router.post("/", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  try {
    await newCelebrity.save();
    res.redirect("/celebrities/");
  } catch (err) {
    console.log("este es el error", err);
    res.render("celebrities/new");
    next();
  }
});

//Creacion boton eliminarr
router.post("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundObject = await Celebrity.findById(id);
    await Celebrity.findByIdAndRemove(foundObject);
    res.redirect("/celebrities/");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

//creacion boton editar
router.get("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundObject = await Celebrity.findById(id);
    res.render("celebrities/edit", { foundObject });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

//Editar y actualizar el dato
router.post("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.findByIdAndUpdate(id, {
      name,
      occupation,
      catchPhrase
    });
    res.redirect("/celebrities");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});


module.exports = router;