const express = require('express');
const router  = express.Router();
const Celebrity  = require("../model/Celebrity.js")
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrity/new", (req, res) => {
  res.render("celebrity/new")
})
//Recibir la informacion para crear un celebry
router.post("/celebrity/create", async (req, res) => {
  const { name, ocupation, catchPhrase } = req.body

  if (name === "" || ocupation === "" || catchPhrase === "") {
    return res.render("celebrity/new", {
      error: "espacios vacios"
    })
  } else {

    await Celebrity.create({ name, ocupation, catchPhrase })
    res.redirect("/celebrities")
  }
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
  console.log(celebrity);
  res.render("celebrity/show", celebrity)
})


module.exports = router;
