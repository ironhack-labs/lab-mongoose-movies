const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.model")

/* GET home page */

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then((celebrity) => {
    res.status(200).render('celebrities/celebrities', {celebrity});
  }).catch((err) => {
    console.error("error loading celebs")
    next(err);
  })
});

router.get('/new', (req, res, next) => {
  res.render("celebrities/new")
 });

 router.post('/create', (req, res, next) => {
   const {name, occupation, catchPhrase} = req.body;
   Celebrity.create({name, occupation, catchPhrase})
   .then(() => {
    res.redirect('celebrities')
   })
   .catch((err) => {
     console.error("error making celeb");
     next(err);
   })
 });

 router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
  .then(() => {
    res.redirect('../celebrities')
   })
    .catch(error => next(error));
    next(err);
});




module.exports = router;