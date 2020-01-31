const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// get  show all celebrites
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities }); //esto es el que llama a la vista
    //capturas el error
  } catch (error) {
    console.log(`Celebrities.js - Error retrieving database ${error}`);
  }
  next();
});

/* GET form to add a celebrity */
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

// crear nuevos con metodo post
router.post("/new", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body; // request del body
    const obj = await Celebrity.create({ name, occupation, catchPhrase });
    console.log(obj);
    return res.redirect("/celebrities");
  } catch (error) {
    console.log(`Celebrities.js - Error retrieving database ${error}`);
  }
});

//borrar celebrities
router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrity.findByIdAndRemove(id);
    console.log(`Celebrities.js - Celebrity deleted ${celebrity}`);
    return res.redirect("/celebrities");
  } catch (error) {
    console.log(`Celebrities.js - Error finding celebrity by id ${error}`);
  }
});

// get show celebrities id esto siempre el ultimo
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params; //request del parametro
    const celebrity = await Celebrity.findById(id);
    res.render("celebrities/show", { celebrity }); // response a la vista
  } catch (error) {
    console.log(`Celebrities.js - Error finding celebrity by id ${error}`);
  }
});

module.exports = router;
