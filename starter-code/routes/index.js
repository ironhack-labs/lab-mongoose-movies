const express = require('express');
const router  = express.Router();
const Celebrity  = require("../model/Celebrity.js")
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

router.get("/celebrities", async (req, res) => {
  const celebrities = await Celebrity.find()
  res.render("celebrity/index", { celebrities })
})


// router.get("/celebrities/:artistId", async (req, res) => {
//   console.log("ssssss");
//   // const celebrities = await Celebrity.find()
//   // res.render("celebrity/index", { celebrities })
// })

router.get("/celebrities/:celebrityId", async (req, res) => {
  const { celebrityId } = req.params
  const celebrity = await Celebrity.findById(celebrityId)
  res.render("celebrity/detail", celebrity)
})


module.exports = router;
