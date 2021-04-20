const express = require('express');
const router  = express.Router();

const Celebrity = require(`../models/celebrity.model`)


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then((result) => {
      res.status(200).render(`celebrities/index`, {celebrities:result})
  
  }).catch((err) => {
      console.log(err); 
  }); 
  })

  router.get("/celebrities/new", (req, res) => {
    res.render("celebrities/new");
  });
  
  router.post("/celebrities/new", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
      .then(() => res.redirect("/celebrities"))
      .catch((error) => res.render("celebrities/new", { error }));
  });

  router.post("/celebrities/:id/delete", (req, res) => {
    const {id} = req.params;
    Celebrity.findByIdAndDelete(id)
    .then (() => {
      res.redirect("/celebrities")
    })
    .catch(error => console.error(error))
  })

  router.get("/celebrities/:id", (req, res) => {
    const {id} = req.params;
    Celebrity.findById(id)
    .then((celebrity) => {
      res.status(200).render("celebrities/show", {celebrity})
    })
    .catch((error) => console.error(error))
  })




module.exports = router;
