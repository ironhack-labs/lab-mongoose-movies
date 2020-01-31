const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");
/* Get the Celebrities */
router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    console.log(celebrity, "celebewonfawlknglasnlkgsadlknglkdsnglkdnl")
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




module.exports = router;