const express = require("express");
const router = express.Router();
const Celeberties = require("../models/celeberty")


router.get("/celeberties", (req, res) => {
  Celeberties.find()
  .then(celeberty => {
    res.render ("celeberties/celeberties", {celeberty})
  })
})

router.get("/celeberties/:id", (req, res) => {
  let id = req.params.id
  Celeberties.findById(id)
  .then(celeberty => {
    res.render ("celeberties/celebertyDetail", {celeberty})
  })
})

router.get("/new-celeberty", (req, res) => {
    res.render ("celeberties/new-celeberty")
})
router.post("/new-celeberty", (req, res) => {
  let newCeleberty = req.body
  
  if ((newCeleberty.name) && (newCeleberty.occupation) && (newCeleberty.catchPhrase)) {
  Celeberties.create({
    name: newCeleberty.name,
    occupation: newCeleberty.occupation,
    catchPhrase: newCeleberty.catchPhrase
  })
  res.redirect("/celeberties")
} else {
  res.render("celeberties/new-celeberty", {falseInput: true})
}
})


router.get("/celeberties/:id/delete", (req, res) => {
  let id = req.params.id
  Celeberties.findByIdAndDelete(id)
  .then (celeberty => {
  res.redirect ("/celeberties")
  })
})


router.get("/celeberties/:id/edit-celeberty", (req, res) => {
  let id = req.params.id;
  Celeberties.findById(id)
  .then ((celeberty => {
    res.render ("celeberties/edit-celeberty", {celeberty})
  }))
})


router.post("/celeberties/:id/edit-celeberty", (req, res) => {
let editCeleberty = req.body
let id = req.params.id



if ((editCeleberty.name) && (editCeleberty.occupation) && (editCeleberty.catchPhrase)) {
  Celeberties.findByIdAndUpdate(id, {
    name: editCeleberty.name,
    occupation: editCeleberty.occupation,
    catchPhrase: editCeleberty.catchPhrase
  })
.then((celeberties => {
  res.redirect("/celeberties")
}))
} else {
  Celeberties.findById(id)
  .then ((celeberty => {
    res.render("celeberties/edit-celeberty",
    {falseInput : true, celeberty: celeberty })
  }))
}
})


module.exports = router;