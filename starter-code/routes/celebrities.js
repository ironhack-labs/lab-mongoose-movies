const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then(celebrities =>{
  res.render('celebrities', {celebrities});

  })
  .catch(error => {
    console.log('Error while getting the celebrities from the DB: ', error);
  })
});


router.get("/celebrities/new", (req, res) => {
  res.render('celebrities/new');
  })


router.get("/celebrities/:id", (req, res) => {
  const id= req.params.id;
  Celebrity.findById(id)
    .then(celebrity =>{
  res.render('celebrities/show', celebrity);

  })
  .catch(error => {
    console.log('Error while getting the celebrities from the DB: ', error);
  })
});


  
router.post('/celebrities', (req, res) => {
  const {name,occupation,catchPhrase} = req.body;
  const celebrity = {
    name,
    occupation,
    catchPhrase
  }
  const newCelebrity = new Celebrity(celebrity);
  newCelebrity.save()
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/celebrities/:id/delete', (req, res) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
  .then(() =>{
    res.redirect("/celebrities");
  })
  .catch((err) => {
    console.log("no se ha borrado");
  })
});

router.get('/celebrities/:id/edit', (req,res) => {
  const id = req.params.id;
  Celebrity.findById(id)
  .then(celebrity =>{
    res.render('celebrities/edit', celebrity);
  })
  .catch((err) =>{
    console.log(err);
  })
})


router.post('/celebrities/:id', (req, res) => {
  const {name,occupation,catchPhrase} = req.body;
  const celebrity = {
    name,
    occupation,
    catchPhrase
  }
  const id = req.params.id;
  Celebrity.findByIdAndUpdate(id, celebrity)
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;