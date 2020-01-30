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

/* Asi pintamos el error con .then
router.get('/', (req, res, next) => {
  celebrity.find()
    .then( (Celebrity) => {
      res.render('celebrities/index', {Celebrity});
    })
    .catch( (err) => console.log('Error ocurred:', err));
})
*/


module.exports = router;