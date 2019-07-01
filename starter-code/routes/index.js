const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/index', (req, res, next) => {
  Celebrity
  .find()
  .then((allCelebrities) =>{
    res.render('celebrities/index',{allCelebrities});
  }).catch(error => {
    console.log(error);
  })
});

router.get('/celebrities/new-celeb', (req, res, next) => {
    res.render('celebrities/new-celeb')
});

router.post('/celebrities/new_celebrity', (req, res, next) => {
  Celebrity
  .create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase : req.body.catchPhrase
  })
  .then(newCeleb =>{
    res.redirect("/celebrities/index")
  }).catch(error => res.redirect("/celebrities/new"))
});


router.get('/celebrities/details/:id', (req, res, next) => {
  Celebrity
  .findById(req.params.id)
  .then(celeb =>{
    res.render("celebrities/show", {celeb})
  }).catch(error => {
    console.log(error);
  })
});

router.post('/celebrities/delete/:id', (req, res, next) => {
  console.log(req.params.id)
  Celebrity
  .findByIdAndDelete(req.params.id)
  .then(delCeleb =>{
    res.redirect("../index")
  }).catch(error => {
    next(error);
  })
});

router.get('/celebrities/edit/:id', (req, res, next) => {
  console.log(req.params.id)
  Celebrity.findById({_id: req.params.id})
  .then(celebrity => {
    res.render("celebrities/edit-celeb", {celebrity})
  }).catch((err)=>{
    console.log(err)
  });

});
router.post('/celebrities/edit-celeb', (req, res) => {
  Celebrity
    .findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(updCelebrity => {
      res.redirect("index")
    })
    .catch((err)=>{
      console.log(err)
    });
})

module.exports = router;