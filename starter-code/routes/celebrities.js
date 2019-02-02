const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js');

/* GET celebrities details*/
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render("celebrities/index", {celebrities: celebrities});
    console.log(celebrities);
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/new', (req, res, next) => {
  // res.render("celebrities/show");
  res.send("Hello");
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render("celebrities/show", {celebrity: celebrity});
    console.log(celebrity);
  })
  .catch(error => {
    console.log(error);
  });
});


module.exports = router;
