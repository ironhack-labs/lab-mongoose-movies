const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity.js");

router.get("/celebrities" , (req, res, next) => {
  Celebrity.find()
    .then(data => {
      res.render("celebrities/index", { data });
    })
    .catch(error => {
      console.log(error);
    });
});
router.get('/new', (req,res) => res.render('celebrities/new'));
router.post("/celebrities", (req, res, next) => {
  const {name,occupation,catchPrhase} = req.body;
  const newCelebrity = new Celebrity({name,occupation,catchPrhase})
  newCelebrity.save()
    .then(data => {
      res.redirect('celebrities');

    })
    .catch(error => {
      res.render("celebrities/new", { data });
      console.log(error);
    });
});

router.get("/show/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then(data => {
      res.render("celebrities/show", { data });
    })
    .catch(error => {
      console.log(error);
    });
});
router.get("/celebrities/:id/edit", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(data => {
      res.render("celebrities/edit" , {data});
    })
    .catch(error => {
      console.log(error);
    });
});
router.post("/celebrities/:id/delete", (req, res, next) => {
  let deleteId = req.params.id;
  Celebrity.findByIdAndRemove(deleteId)
    .then(data => {
      res.redirect("/celebrities")
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const {name,occupation,catchPrhase} = req.body;
  console.log(req.params.id);
  console.log({name,occupation,catchPrhase});
  Celebrity.findByIdAndUpdate(req.params.id,{name,occupation,catchPrhase})
    .then(data => {
      res.redirect("/celebrities")

    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;