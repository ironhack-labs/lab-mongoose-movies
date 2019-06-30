const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find().then(celebrities=>{
    res.render("index",{celebrities})
  }).catch((err)=>{
    console.log(err)
  });
});
router.get('/detail/:id', (req, res, next) => {
  Celebrity.findOne({_id: req.params.id}).then(celebrity=>{
    res.render("detail", {celebrity})
  }).catch((err)=>{
    console.log(err)
  });
  
});
router.get('/add', (req, res, next) => {
  res.render("add")
});
router.post('/add', (req, res, next) => {
  Celebrity
    .create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(celebrityNew => res.redirect("/"))
});
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.params.id})
    .then(celebrityDelete => res.redirect("/"))
    .catch((err)=>{
      console.log(err)
    });
});
router.get('/edit/:id', (req, res, next) => {
  Celebrity.findOne({_id: req.params.id}).then(celebrity=>{
    res.render("edit", {celebrity})
  }).catch((err)=>{
    console.log(err)
  });
  
});
router.post("/edit-celebrity", (req, res) => {
  Celebrity
    .findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(updatedCelebrity => {
      res.redirect("/")
    })
    .catch((err)=>{
      console.log(err)
    });
})



module.exports = router;
