const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");
/* Get the Celebrities */
router.get("/", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    return res.render("celebrities/index", { celebrity });
  } catch (err) {
    return res.send(`error: ${err}`);
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










module.exports = router;