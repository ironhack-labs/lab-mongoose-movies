//Iteration #2
const express = require("express");
const router = express.Router();
const celebrity = require("../models/celebrity");

// CRUD -> (R) Retrieve - el GET es donde lo pinto y el render es lo que pinto
router.get("/", async (req, res, next) => {
  try {
    const Celebrity = await celebrity.find();
    res.render("celebrities/index", { Celebrity });
  } catch (err) {
    res.send(`error: ${err}`);//Con res.send mostramos el error en el navegador
    next();
  }
});

// CRUD -> (C) Create: Show form - Page to create new celebrities
router.get("/new", (req, res, next) => {
  return res.render("celebrities/new");

});
router.post("/new", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body; //Coge los parámetros del formulario
  const obj = await celebrity.create({
    name,
    occupation,
    catchPhrase,
  });
  console.log(obj);
  res.redirect("/celebrities");
});

// CRUD -> (R) Retrieve - Show the list celebrity ID in celebrity/show 
router.get("/show/:id", async (req, res, next) => {
  try {
    //const id  = req.params.id;
    const { id } = req.params;
    const foundObjFromId = await celebrity.findById(id);
    return res.render("celebrities/show", { foundObjFromId });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});

// CRUD -> (U) Update/Edit the object in db
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const obj = await celebrity.findById(id);
  return res.render("celebrities/edit", { obj, isUpdate: true });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  await celebrity.findByIdAndUpdate(id, {
    name,
    occupation,
    catchPhrase
  });
  res.redirect("/celebrities");
});

// CRUD -> (D) Delete the object in database with route params
router.get("/delete/:id", async (req, res, next) => {
  try {
    //const id  = req.params.id;
    const { id } = req.params;
    await celebrity.findByIdAndRemove(id);
    res.redirect("/celebrities/");
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});
module.exports = router;