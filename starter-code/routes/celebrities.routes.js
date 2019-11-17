const express = require("express");
const router = express.Router();

const Celebrity = require('../models/celebrity.model')



//Listing Celeb
router.get("/", (req, res, next) => {
  // res.render('celebrities')
  Celebrity.find()
    .then(allTheCelebrities =>
      res.render("celebrities", { celebrities: allTheCelebrities })
    )
    .catch(err => console.log("Error en el DB: ", err));
});


//Details of a Celeb
router.get("/details/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebDetail => res.render("details", { det: celebDetail }))
    .catch(err => console.log("error el DB", err));
});

// Add Celeb GET
router.get("/add", (req, res, next) => {
  res.render('addCeleb')});

// Add Celeb POST
router.post("/add", (req, res, next) => {
  
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(x => res.redirect("/celebrities")) ///////porque non funciona solo con "/" ?^?^?^?
    .catch(x => res.redirect("/add"));
})

//// Delete Celeb

router.get("/delete/:id", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(x => res.redirect("/celebrities"))
  .catch(err =>  console.log ('error en el DB', err))
});


//// Edit Celeb 

router.get("/edit/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebEdit => res.render('edit', { edit: celebEdit }))
    .catch(err => console.log('error en el DB', err))
  
});
  

router.post("/edit/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  
  
  Celebrity.findOneAndUpdate(req.params.id, { name, occupation, catchPhrase })
    .then(res.redirect("/celebrities"))
    .catch(err => console.log("error en el DB", err));
  
});




module.exports = router;


