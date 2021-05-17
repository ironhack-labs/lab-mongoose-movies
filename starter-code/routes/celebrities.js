const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then((dbCelebs) => {
        res.render("celebrities/index", {Celebs: dbCelebs})
    })
    .catch(error => next(error));
})

router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new")
})

router.post("/celebrities/new", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
 
    Celebrity.create({ name, occupation, catchPhrase })
      .then(() => res.redirect('/celebrities'))
      .catch(() => res.render("/celebrities/new"))
  });

router.get("/celebrities/:id", (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id) 
    .then(theCeleb => res.render('celebrities/show', { celeb: theCeleb }))
    .catch(error => {
      console.log('Error while retrieving celeb details: ', error);
      next(error);
    });
})

router.get('/celebrities/:id/edit', (req, res, next) => {
    const { id } = req.params;
  
    Celebrity.findById(id)
      .then(celebToEdit => {
        res.render('celebrities/edit', {celeb: celebToEdit}); 
      })
      .catch(error => next(error));
  });
  
  router.post('/celebrities/:id/edit', (req, res) => {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
   
    Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { new: true })
      .then(updatedCeleb => res.redirect('/celebrities'))
      .catch(error => next(error));
  });

router.post("/celebrities/:id/delete", (req, res, next) =>{
    const {id} = req.params;

    Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect('/celebrities'))
    .catch(error => next(error))
})


module.exports = router;