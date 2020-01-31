const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// Show the list celebrity in celebrity/index
router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render("celebrities/index", { celebrity });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Show the list celebrity ID in celebrity/show
router.get("/show/:id", async (req, res, next) => {
  try {
    //const id  = req.params.id;
    const { id } = req.params;
    const foundObjFromId = await Celebrity.findById(id);
    res.render("celebrities/show", { foundObjFromId });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Show the list celebrity in celebrity/new
router.get("/new", async (req, res, next) => {
  try {
    res.render("celebrities/new");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Create: Submit & Process form data
router.post("/", async (req, res, next) => {
  //console.log("req.body:", req.body);
  const { name, occupation, catchPhrase } = req.body;
  const addCelebrity = new Celebrity({ name, occupation, catchPhrase }); //Crear nueva entrada
  try {
    //Crear objeto .create()
    // await Celebrity.create({
    //   name,
    //   occupation,
    //   catchPhrase
    // });
    await addCelebrity.save(); //Guardar objeto .save()
    res.redirect("/celebrities/");
  } catch (err) {
    console.log("este es el error", err);
    res.render("celebrities/new");
    next();
  }
});

//Delete the object in database with route params
router.post("/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    const foundObjFromId = await Celebrity.findById(id);
    await Celebrity.findByIdAndRemove(foundObjFromId);
    res.redirect("/celebrities/");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// Show the list celebrity in celebrity/edit
router.get("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundObjFromId = await Celebrity.findById(id);
    res.render("celebrities/edit", { foundObjFromId });
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
