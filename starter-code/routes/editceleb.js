const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.model")



router.get('/:id/editceleb', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then((celebrity) => {
    res.status(200).render('celebrities/editceleb', {celebrity});
  }).catch((err) => {
    console.error("error loading celebs")
    next(err);
  })
 });

 router.post('/editceleb', (req, res) => {
  const { id } = req.params;
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase}, { new:true })
    .then(() => {
      res.redirect('../celebrities')
    })
    .catch(error => next(error));
});


 module.exports = router;