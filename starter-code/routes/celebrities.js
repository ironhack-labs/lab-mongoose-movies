const express = require("express");
const router = express.Router();

const Celebrity = require('../models/Celebrity')


router.get("/", (req, res) => {
    Celebrity.find()
        .then(celebrities => {res.render("celebrities/index", { celebrities })})
        .catch(err        => console.log('Error', err))
})



router.get("/details/:id", (req, res) => {
    Celebrity.findById(req.params.id)                 
        .then(Celebrity => res.render("celebrities/show", {Celebrity }))
        .catch(err      => console.log('Error', err))        
})

router.get("/new", (req, res) => res.render("celebrities/new"))



// Registrar formulario nuevo celebrity
router.post('/new', (req, res) => {

    const {name,occupation, catchPhrase} = req.body
    const celebrity = new Celebrity({name, occupation, catchPhrase})
  
    celebrity.save()
      .then(thenewcelebrity  => res.redirect('/celebrities'))
      .catch(error           => res.redirect('/celebrities/new'))
  })


router.post("/details/:id/delete", (req, res) => {
    Celebrity.findByIdAndRemove(req.params.id)                 
        .then(Celebrity   => res.redirect("/celebrities"))
        .catch(err        => console.log('Error', err))        
})
  



router.get("/details/:id/edit", (req, res) => {
Celebrity.findById(req.params.id)                 
        .then(Celebrity   => res.render("celebrities/edit", {Celebrity}))
        .catch(err        => console.log('Error', err))        
})



router.post('/:id', (req, res) => {

    const {name, occupation, catchPhrase} = req.body
   
    Celebrity.updateOne({_id: req.params.id},  { $set: {name, occupation, catchPhrase }})
    .then(()      => res.redirect('/celebrities'))
    .catch(error  => console.log(`Error updating book: ${error}`))
   })


module.exports = router;