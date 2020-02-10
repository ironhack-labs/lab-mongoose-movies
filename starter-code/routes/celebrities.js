const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrities.model")

router.get("/celebrities", (req, res) => {
  Celebrity.find()
  .then(allCelebrities => {
    res.render("celebrities/index", {celebrities: allCelebrities})
  })
  .catch(err => console.log("error mostrando todos los celebrities", err))
})


router.get("/celebrities/:id", (req, res, next) => {

  const celebId = req.params.id

  Celebrity.findById(celebId)
  .then(retrievedCelebrity => res.render("celebrities/show", retrievedCelebrity))
  .catch(err => {
    console.log("error retrieving and sending celebrity info to show of type", err)
    next()
  })
})

router.get( "/celebrities/new", (req, res, next) => res.render("../views/celebrities/new.hbs"))

router.post("/celebrities/new", (req, res, next) => {

  const {name, occupation, catchPhrase} = req.body

  Celebrity.create({name, occupation, catchPhrase})
  .then(newCelebrity => {
      
    res.redirect("/celebrities")
    
  })
  .catch(err => console.log("error al crear el nuevo celebrity", err))

})


router.get("/celebrities/:id/delete", (req, res, next)=> {

  const celebId = req.params.id

  Celebrity.findByIdAndDelete(celebId)
  .then(deletedCelebrity => {

    res.redirect("/celebrities")

    })
    .catch(err => {
      console.log("there was an error erasin the celebrity of type ". err)
      res.redirect("/celebrities")
    })
})



router.get("/celebrities/:id/edit", (req, res, next) => {

  const celebId = req.params.id

  Celebrity.findById(celebId)
  .then(selectedCelebrity => res.render("../views/celebrities/edit.hbs", selectedCelebrity))
  .catch(err => console.log("there was an error deleting the celebrity of type", err))

})


router.post("/celebrities/:id", (req, res, next) => {

  const {name, occupation, catchPhrase} = req.body

  const celebId = req.params.id

  Celebrity.findByIdAndUpdate(celebId, {name, occupation, catchPhrase})
  .then(updatedCeleb => res.redirect("/celebrities"))
  .catch(err => console.log("error al hacer el update a las celebridades de tipo", err))
})


module.exports = router;
