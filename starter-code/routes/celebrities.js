const express = require("express")

const Celebrity = require("../models/Celebrity.model")

const router = express.Router()

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrity) => {
      res.render("celebrities/index", { celebrity })
    })
    .catch((error) => console.log("error looking for celebrities", error))
})

router.get('/celebrities/new', (req,res,next)=>{
    res.render('celebrities/new');
})

router.post('/celebrities/new',(req,res,next) => {
    const newCelebrity = new Celebrity(req.body);
    newCelebrity.save()
    .then(()=> res.redirect('/celebrities'))
    .catch((error) => res.render('celebrities/new'));
})

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celeb) => {
      res.render("celebrities/show", celeb)
    })
    .catch((error) => console.log(error))
})

router.get("/celebrities/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect("/celebrities")
      })
      .catch((error) => console.log(error))
  })





module.exports = router
