const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

console.log("celebrities route")

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', {celebrities}))
    .catch(err => next(err))
});

router.get('/celebrities/:celebId', (req, res, next) => {
  const id = req.params.celebId;

  Celebrity.findById(id)
    .then(celebrity => {
      console.log(celebrity)
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      console.log(error)
    })
  
});

module.exports = router;