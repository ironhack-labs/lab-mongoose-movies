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


router.post("/celebrity/:celebrityId/delete", async (req, res) => {
  const { celebrityId } = req.params
  // console.log(celebrityId);
  const celebrityToDelete = await Celebrity.findOne({
      _id : celebrityId
    })
    Celebrity.findByIdAndRemove(celebrityId).then(
     function (data) {
       res.redirect("/celebrities");
     },
     function (error) {
       next(error);
       console.log("Error while getting the books from the DB: ", error);
     }
   );

})

router.get("/celebrities/:celebrityId", async (req, res) => {
  const { celebrityId } = req.params
  const celebrity = await Celebrity.findById(celebrityId)
  console.log(celebrity);
  res.render("celebrity/show", celebrity)
})


module.exports = router;
