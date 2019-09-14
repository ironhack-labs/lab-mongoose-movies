const express = require('express');
const router  = express.Router();
const Celebritys = require("../models/Celebritys");


router.get('/', (req, res, next) => {

  Celebritys.find()
  .select({name:1})
  .then(allcelebrities => {
    res.render('celebrities/index', {
      allcelebrities
    });
  })
});

router.get("/new", (req, res) => {
  res.render("celebrities/new")
})

router.get("/:id/edit", (req, res) => {
  Celebritys.findById(req.params.id).then(thisCelebrity =>{
    res.render("celebrities/edit", {thisCelebrity})
  })
})


router.post("/", (req, res) => {
  Celebritys.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(createdArtist => {
    res.redirect("celebrities")
  }).catch(err =>{
    res.redirect("celebrities/new")
    })
})


router.get("/:id/", (req, res) => {
  Celebritys.findById(req.params.id).then(oneCelebrity => {
    res.render("celebrities/show", {oneCelebrity} )
  })
})


router.post("/:id/delete", (req, res) => {
  Celebritys.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("celebrities");
  })
})



router.post("/:id/edit"), (req, res) => {
  Celebritys.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(updateArtist => {
    res.redirect("celebrities")
  })
}



module.exports = router;