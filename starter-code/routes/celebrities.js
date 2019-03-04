const express = require("express");
const Router = express.Router();

const Celebrity = require('../models/Celebrity')

Router.get("/", (req, res) => {
  Celebrity.find()
  .then(celebrities   => res.render("celebrities/index", {celebrities}) )
  .catch(err    => console.log('Error', err))
})

Router.get("/details/:id", (req, res) => {
  console.log(req.params.id)
  Celebrity.findById(req.params.id)
  .then(celebrity   => {
    console.log(celebrity)
    res.render("celebrities/show", {celebrity}) 
  })
  .catch(err    => console.log('Error', err))
})


Router.post("/details/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(celebrity   => {
    console.log(celebrity)
    res.redirect('/celebrities') 
  })
  .catch(err    => console.log('Error', err))
})




Router.get("/new", (req, res) => {
  console.log("working")
  res.render("celebrities/new")
})

Router.post('/new', (req, res) => {

  const {name, occupation, catchPhrase} = req.body
  const celebrity = new Celebrity({name, occupation, catchPhrase})

  celebrity.save()
    .then(thenewcelebrity  => res.redirect('/celebrities'))
    .catch(error      => res.redirect('/celebrities/new'))
})


Router.get("/details/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celebrity   => {
    res.render("celebrities/edit", {celebrity}) 
  })
  .catch(err    => console.log('Error', err))
})

Router.post("/details/:id", (req, res) => {
  const {name, occupation, catchPhrase} = req.body
  console.log(req.params.id)

  Celebrity.updateOne({_id: req.params.id}, { $set: {name, occupation, catchPhrase }})
  .then(()    => res.redirect('/celebrities'))
  .catch(error  => console.log(`Error updating celebrity: ${error}`))
})

module.exports = Router