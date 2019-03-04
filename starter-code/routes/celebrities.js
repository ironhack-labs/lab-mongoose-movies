const express = require("express");
const Router = express.Router();

const Celebrity = require('../models/Celebrity')


Router.get("/", (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render("celebrities/index", {celebrities});
  })
  .catch(err => {
      console.log('Error while finding all celebrities', err)
      next()
  })
})

Router.post("/", (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body
    const newCelebrity = new Celebrity({name, occupation, catchPhrase}) 
    
    newCelebrity.save()
    .then(newCelebrity  => res.redirect('/celebrities'))
    .catch(error      => {
        console.log(`Error saving new celebrity: ${error}`)
        res.render("celebrities/new")
        next()
    })
})


Router.get("/:id", (req, res, next) => {
 
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", {celebrity})
    })
    .catch(err => {
        console.log('Error while finding the celebrity', err)
        next()
    })
})

Router.post("/:id", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  Celebrity.update({_id: req.params.id},  { $set: {name, occupation, catchPhrase}})
  .then(celebrity    => res.redirect('/celebrities'))
  .catch(err => {
    console.log('Error while updating a celebrity', err)
    next()
  })
})

Router.post("/:id/delete", (req, res, next) => {
 
    Celebrity.findByIdAndRemove(req.params.id)
      .then(celebrity => {
        console.log("He borrado la celebrity " +  celebrity)
        res.redirect("/celebrities")
      })
      .catch(err => {
          console.log('Error while deleting a celebrity', err)
          next()
      })
  })

  Router.post("/:id/edit", (req, res, next) => {
 
    Celebrity.findById(req.params.id)
      .then(celebrity => {
        res.render("celebrities/edit", {celebrity})
      })
      .catch(err => {
          console.log('Error while finding a celebrity to edit', err)
          next()
      })
  })

Router.get("/new", (req, res, next) => {
    res.render("celebrities/new")
})






module.exports = Router;