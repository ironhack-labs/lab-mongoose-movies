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

// Page to create new celebrities
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
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

// Show the list celebrity ID in celebrity/show
router.get("/show/:id", async (req, res, next) => {
  try {
    //const id  = req.params.id;
    const { id } = req.params;
    const foundObjFromId = await celebrity.findById(id);
    res.render("celebrities/show", { foundObjFromId });
  } catch (err) {
    res.send(`error: ${err}`);
    next();
  }
});
module.exports = router;