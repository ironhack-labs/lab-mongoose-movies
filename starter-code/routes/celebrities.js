const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");
  
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then( (celeb) => {res.render('celebrities/index', {celeb})})
});


router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then( celeb => {res.render('celebrities/show', celeb)});
});



module.exports = router;


