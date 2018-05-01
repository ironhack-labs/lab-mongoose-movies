const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
  console.log("Entraron a home...")
});

router.get('/celebs', (req, res) => {
  Celebrity.find()
    .then(celebrities=>{
      res.render("celebrities", { celebrities }  );
      console.log(celebrities)
    }).catch(e=>{
      console.log(e)
    })
});

router.get("/celebs/:id", (req,res) => {
  let _id = req.params.id

    Celebrity.findById({_id})
    .then(celebrity=>{
      res.render("celeb-detail", celebrity)
    })

    
});

router.get("/add", (req,res, next) => {
  res.render("celeb-add")
});

router.post("/add", (req,res, next) => {
  const { name, image, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, image, occupation, catchPhrase});
  newCeleb.save()
.then((celebrity) => {
  res.redirect("/celebs")
})
.catch((error) => {

})
});


router.post("/celebs/:id/delete", (req,res, next) => {
  let _id = req.params.id

  Celebrity.findByIdAndRemove({_id})
  .then(celebrity=>{
    res.redirect("/celebs")
  })
});



module.exports = router;
