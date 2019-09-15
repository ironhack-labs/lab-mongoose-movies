const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get('/',(req,res,next)=>{
  
  // res.send(`hola`);
  
  Celebrity.find().then(celebrities=>{
    console.log(celebrities);
    res.render("celebrities/index", {
      celebrities
    });
  })
})


router.get("/:id", (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId).then(celebrity => {
    console.log(celebrity);

    res.render("celebrities/show", { celebrity });
  });
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
    .then(celeb => {
      console.log(`Success! ${name} was created in the database!`);
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      console.error(err);
      res.redirect("/new");
    });
});


router.get("/new", (req, res) => {
  res.render("celebrities/new");
});



module.exports = router;