const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((dbCelebrity) => {
      res.render('celebrities/index', {celebrities: dbCelebrity });
    })
    .catch((err) => next(err));
});

router.get('/celebrities/:id', (req, res, next) => {
    const {id} = req.params;
    Celebrity.findById(id)
    .then(foundCeleb => {
      console.log(foundCeleb);
      res.render('celebrities/show', { celeb: foundCeleb });
    })
    .catch(e => next(e));
}) 

module.exports = router;