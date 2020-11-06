const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrity/create", (req, res) => {
  res.render("celebrity/create")
})
//Recibir la informacion para crear un celebry
router.post("/celebrity/create", async (req, res) => {
  const { name, ocupation, catchPhrase } = req.body
  await Celebrity.create({ name, ocupation, catchPhrase })
  res.redirect("/")
})

module.exports = router;
